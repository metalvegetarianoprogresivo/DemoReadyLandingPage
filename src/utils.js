import data from "./assets/data/categories/demos.json";

/**
 * Function to get the current url location 
 */
export const getLocation = () => {
    let location = window.location
    let words = location.pathname.split("/")   

    return words
}

/**
 * Function to get the current url 
 */
export const getUrl = () => {
    let url = window.location
    return url
}

/**
 * Function to get the id of demos saved as data 
 */
export const getDataIds = () => {
    let demos = []
    let demosId = []

    for(let i = 0; i < data.length; i++) {
      demos.push(data[i].demos)
    }

    for(let i = 0; i < demos.length; i++) {
      demosId.push(demos[i][0].id)
    }

    return demosId
}

/**
 * Function to find if the id found in url match to any id 
 * of data object
 */
export const matchParamUrl = () => {
    let dataId = this.getDataIds()

    let location = window.location
    let words = location.pathname.split("/")

    for (let id in dataId) {
      (id === words[2]) ? console.log("Hay match") : console.log("Sory... 404")
    }
}

/**
 * Fucntion to get the categories data to show the different 
 * demos of each category in the sidenav of DemoPage component
 */
export const getCategories = () => {
    let categories = []

    console.log(data)
    for(let i = 0; i < data.length; i++) {
        categories.push(data[i].category)
    }

    return categories
}

/**
 * Function to get the demos by category
 */
export const getDemosByCategory = (category) => {
    let demosByCategory = []
    
    for(let i = 0 ; i < data.length; i++) {   
        if (data[i].id === category) { 
            demosByCategory.push(data[i].demos) 
        }
    }

    return demosByCategory
}

/**
 * Function to get the demo object data by id
 */
export const getDemoById = (category, id) => {
    let demos = getDemosByCategory(category)
    //console.log(demos)
    let demoById = {}
    
    for (let i = 0; i < demos[0].length; i++)  {
        console.log(demos[0][i])
        if(demos[0][i].id === id) { demoById = demos[0][i] }
    }
    //console.log(demoById)

    return demoById
}