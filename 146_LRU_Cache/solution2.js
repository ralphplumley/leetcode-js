/*

LRU Cache
get(key) - get the value of the key if the key exists in the cache, otherwise return -1
put(key, value) - set or insert the value if the kye is not already present. If cache reaches its capacity,
    it should invalidate the least recently used item before inserting the new item

both operations should be O(1)
maintain order, so use a linked list. It can grow and shrink in O(1) time.
 */

class DLL {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.cache = new Map()

        // head and tail will be used as sentinel nodes
        // i.e. the real first node is head.next
        // and the real last node is tail.prev
        this.head = new DLL(0,0)
        this.tail = new DLL(0,0)
        this.head.next = this.tail
        this.tail.prev = this.head
        this.size = 0
        this.capacity = capacity
    }

    get(key) {
       if (this.cache.has(key)) {
           const loc = this.cache.get(key)
           loc.prev.next = loc.next
           loc.next.prev = loc.prev

           this.head.next.prev = loc
           loc.next = this.head.next
           this.head.next = loc
           loc.prev = this.head

           return loc.val
       }

       return -1
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.get(key)
            this.cache.get(key).val = value
            return
        }
        this.size++

        if (this.size > this.capacity) {
            const lru = this.tail.prev
            this.cache.delete(lru.key)
            this.tail.prev.val = this.tail.val
            this.tail.prev.next = null
            this.tail = this.tail.prev
            this.size--
        }

        const new_head = new DLL(key, value)
        this.head.next.prev = new_head
        new_head.next = this.head.next
        this.head.next = new_head
        new_head.prev = this.head
        this.cache.set(key, new_head)
    }
}

let lru_cache = new LRUCache(3)
lru_cache.put(1,1)
lru_cache.put(2,2)
lru_cache.put(1,"one")
console.log(lru_cache.head.next)
