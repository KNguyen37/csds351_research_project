from flask import Flask, request
import pickle
import pandas as pd
from nltk.corpus import stopwords 
import nltk
import string
import numpy as np
import json

nltk.download('stopwords')

# Load ML model
P, Q, userid_vectorizer = pickle.load(open("yelp_recommendation_model_8.pkl", "rb"))

# Import sample database
business = pd.read_csv("business_sample.csv")
df1 = business[(business['state'] == "CA") & (business['city'] == 'Santa Barbara')]
df2 = df1.reset_index(drop = True)
business_CA = df2.drop(columns = 'Unnamed: 0')

# Setup text processing
stop = []
for word in stopwords.words('english'):
    s = [char for char in word if char not in string.punctuation]
    stop.append(''.join(s))

api = Flask(__name__)

# Class to represent a restaurant
class Restaurant:
    def __init__(self, id, name, categories, stars):
        self.id = id
        self.name = name
        self.categories = categories
        self.stars = stars
    
    def to_dict(self):
        return {"id": self.id, "name": self.name, "categories": self.categories, "stars": self.stars}

# Processes inputted text for the ML model
def text_process(mess):
    nopunc = [char for char in mess if char not in string.punctuation]
    nopunc = ''.join(nopunc)
    return " ".join([word for word in nopunc.split() if word.lower() not in stop])

# Creates a list of restaurants from a dataframe
def build_results(df):
    restaurants = []
    for i in df.index:
        restaurants.append(Restaurant(business_CA[business_CA['business_id']==i]['business_id'].iloc[0],
                                      business_CA[business_CA['business_id']==i]['name'].iloc[0],
                                      business_CA[business_CA['business_id']==i]['categories'].iloc[0],
                                      str(business_CA[business_CA['business_id']==i]['stars'].iloc[0])+ ' '+str(business_CA[business_CA['business_id']==i]['review_count'].iloc[0])
                                     ))
    return restaurants

@api.route('/search', methods=['POST'])
def generate_recommendations():
    words = request.json["words"]
    test_df= pd.DataFrame([words], columns=['text'])
    test_df['text'] = test_df['text'].apply(text_process)
    test_vectors = userid_vectorizer.transform(test_df['text'])
    test_v_df = pd.DataFrame(test_vectors.toarray(), index=test_df.index, columns=userid_vectorizer.get_feature_names_out())
    predictItemRating=pd.DataFrame(np.dot(test_v_df.loc[0],Q.T),index=Q.index,columns=['Rating'])
    topRecommendations=pd.DataFrame.sort_values(predictItemRating,['Rating'],ascending=[0])[:7]
    return json.dumps({"results": [obj.to_dict() for obj in build_results(topRecommendations)]})