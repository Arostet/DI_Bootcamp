items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"
# outuput ["Bread", "Fertilizer", "Water"]

can_buy = []
for product, price in items_purchase.items():

    #cleaning the data
    price_clean = price.strip('$').replace(',', '')
    wallet_clean = wallet.strip('$')

    #converting the str to int
    price_clean = int(price_clean)
    wallet_clean = int(wallet_clean)

    #checking what can affort
    if price_clean > wallet_clean:        
        continue
    else:
        can_buy.append(product)
        wallet_clean -= price_clean

print(f' you can buy: {can_buy} and you have {wallet_clean} dollars in your wallet')


# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }

# wallet = "$100" 
# # ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$1" 
# #nothing


