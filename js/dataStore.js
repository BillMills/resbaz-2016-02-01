function fetchData(data){
    return window.dataStore[data.site]
}

window.dataStore = {}

dataStore.melbourne = {
    'location': 'University of Melbourne',
    'dates': 'February 1-3, 2016',
    'map': 'sites/melbourne.geojson'
}