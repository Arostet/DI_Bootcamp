import numpy as np

import pandas as pd

sales = [0, 5, 155,0, 518, 9, 1827, 616, 317, 325]
sales_series = pd.Series(sales, name="Sales")

sales_series

sales_series.values

sales_series.index

sales_series.name

sales_series.dtype

sales_series.astype("bool")

sales_series.astype("float")

oil = pd.read_csv("./oil.csv").dropna()
oil_array = np.array(oil["dcoilwtico"].iloc[1000:1100])
oil_array

oil_series = pd.Series(oil_array, name="oil_prices")
oil_series

oil_series.mean()

oil_series.astype("int").values.mean()

sales_series

sales_series[2:5].mean()

items = ["coffee", "bananas", "tea","coconut", "sugar"]
sales_items = sales_series[:5]
sales_items.index=items
sales_items

# pd_sales = pd.Series(sales_items, index=items, name="Sales_Item")
# pd_sales

sales_items["tea"]

sales_items["bananas":"coconut"]

sales_items[2]

#loc v iloc

items = ["coffee", "coffee", "tea","coconut", "sugar"]
sales_items.index = items
sales_items

sales_items["coffee"]

sales_items.reset_index()

sales_items.reset_index(drop=True)

# Set the date series, which has been created below, to be the index of the oil price series created in assignment 1.

# Then, take the mean of the first 10 and last 10 prices of the series.

# Finally, grab all oil prices from January 1st, 2017 - January 7th, 2017 (inclusive) and set the index to the default integer index.

oil = pd.read_csv("./oil.csv").dropna()
oil

pd.Series("oil")

dates = pd.Series(oil["date"].iloc[1000:1100])
dates

oil_series.index = dates

oil_series

oil_series[:10].mean()

oil_series.iloc[-10].mean()

oil_series.loc["2017-01-01": "2017-01-07"].reset_index(drop=True)

# FILTERING SERIES


sales = [0, 5, 155,0, 518, 9, 1827, 616, 317, 325]
sales_series = pd.Series(sales, name="Sales")

sales_series = sales_series[:5]
sales_series

sales_series.loc[sales_series > 0]

sales_series > 0


sales_series.index = items
mask = (sales_series > 0) & (sales_series.index == 'coffee')
sales_series.loc[mask]

sales_series ==5
##numpy

sales_series.eq(5)
##pandas

sales_series.index.isin(["coffee", "tea"])

~sales_series.index.isin(["coffee", "tea"])

# Sorting Series


sales_series.sort_values(ascending=False)

sales_series.sort_index(ascending=False)

sales_series.sort_index(ascending=True)

dates = [
    "2016-12-22",
    "2017-05-03",
    "2017-01-06",
    "2017-03-05",
    "2017-02-12",
    "2017-03-21",
    "2017-04-14",
    "2017-04-15",
]

oil_series

oil_series.sort_values(ascending=True).iloc[0:9]

oil_series.index[0:9].sort_values(ascending=True)

#the mask method is a filtering method
mask = (oil_series <= 50) & (oil_series.index.isin(dates))
oil_series.loc[mask]

