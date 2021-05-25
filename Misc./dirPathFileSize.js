const path = {
    'home' : {
       'desktop' : {
            'file' : 1234,
            'dir1' : {
                'proj1' : {
                   'ppt_file' : 9082
                },
                'image': 2367,
            }
        },
       'documents' : {
            'word_doc' : 9139
        }
    },
    'bin' : {
        'app1' : 134099,
        'app2' : 10395,
        'x11' : {
            'sys_app' : 12408
        }
    },
    'sys' : {
        'block' : {
            'file': 93498
        },
        'bus' : {
            'file': 93498
        }
    },
    'random_image' : 1234
}

const totalSize = function(el) {
    // Using a queue
    let total_size = 0,
        queue = []

    if (typeof el === 'number') return el
    else queue.push(el)

    while (queue.length > 0) {
        let obj = queue.shift()
        for (const prop in obj) {
            if (typeof obj[prop] === 'number') total_size += obj[prop]
            else queue.push(obj[prop])
        }
    }

    return total_size
}

console.log(totalSize(path))
