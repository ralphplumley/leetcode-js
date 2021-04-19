const MyLinkedList = require('./solution')
const Node = require('./solution')

test('Initialize LinkedList', () => {
    let ll = new MyLinkedList()
    let newNode = new Node(4)
    ll.next = newNode
    console.log(ll)
    expect(1).toBe(1)
})







