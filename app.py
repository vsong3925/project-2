import json
from flask import Flask, render_template
import pandas as pd
import os

#%%

app = Flask(__name__)

#%%

@app.route("/")
def index():
    return render_template("index.html")

#%%

@app.route("/home_values")
def home_values(): 
    
    cwd = os.getcwd()
    
    home_values = pd.read_csv("data/zillow_home_values.csv")
    home_values_df = home_values.drop(columns = ["SizeRank", "StateName", "StateCodeFIPS", "MunicipalCodeFIPS"]).fillna(0)
    
    print(home_values_df)
    
    
    home_values_json = home_values_df.to_json(orient='records')
    
    return home_values_json

#%%

if __name__ == "__main__":
    app.run(debug=True)
#%%

