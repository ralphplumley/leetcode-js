const video_data = {
    'level1' : 'Welcome to level 1',
    'level2' : 'Welcome to level 2',
    'level3' : {
        'subLevel3' : 'Welcome to sub-level 3'
    }
}

const lodashGet = (obj, path, defaultValue) => {
    const arr = path.split('.')

    // base case
    if (arr.length === 1) {
        let currPath = arr[0]
        return obj.hasOwnProperty(currPath) ? obj[currPath] : defaultValue
    }

    return lodashGet(obj[arr.shift()], arr[0], defaultValue)
}

// tests
console.log(lodashGet(video_data, "level1", "Not Found")) //> "Welcome to level 1
console.log(lodashGet(video_data, "level3.subLevel3", "Not Found")) //> "Welcome to sub-level 3"
console.log(lodashGet(video_data, "level3.subLevel4", "Not Found")) //> "Not Found"
