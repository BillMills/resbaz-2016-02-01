function fetchData(data){
    return window.dataStore[data.site]
}

function injectMap(){
    document.getElementById('maptarget').innerHTML = layout.partials.map
}

window.dataStore = {}

dataStore.melbourne = {
    'location': 'University of Melbourne',
    'dates': 'February 1-3, 2016',
    'map': 'sites/melbourne.geojson'
}