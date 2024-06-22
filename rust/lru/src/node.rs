use std::{cell::RefCell, rc::{Rc,Weak}};

#[derive(Debug)]
struct Node<T> {
    value: T,
    prev: Option<Weak<RefCell<Node<T>>>>,
    next: Option<Rc<RefCell<Node<T>>>>,
}

impl<T: Copy> Node<T> {
    fn new(value: T) -> Node<T> {
        Node {
            value,
            prev: None,
            next: None,
        }
    }
}

impl <T: Copy> From<Node<T>> for Option<Rc<RefCell<Node<T>>>> {
    fn from(value: Node<T>) -> Self {
        Some(Rc::new(RefCell::new(value)))
    }
}

type NodePtr<T> = Rc<RefCell<Node<T>>>;

struct List<T> {
    head: Option<NodePtr<T>>,
    tail: Option<NodePtr<T>>,
}

impl<T: Copy> List<T> {
    fn new() -> List<T> {
        List {
            head: None,
            tail: None,
        }
    }

    fn push_back(&mut self, value: T) {
        let mut new_node = Node::new(value);
        match &mut self.tail.take() {
            Some(tail) => {
                new_node.prev =  Some(Rc::downgrade(&tail));
                self.tail  = new_node.into();
                tail.borrow_mut().next = self.tail.clone()

            },
            None => {
                self.head = new_node.into();
                self.tail = self.head.clone();
            },
        }
    }

    fn push_front(&mut self, value: T) {
        let mut new_node = Node::new(value);
        match &mut self.head.take() {
            None => {
                self.head  = new_node.into();
                self.tail = self.head.clone();
            },
            Some(head) => {
                new_node.next = Some(head.clone());
                self.head= new_node.into();

                if let Some(h) = &self.head {
                    h.borrow_mut().prev = Some(Rc::downgrade(h));
                }

            },
        }

    }

    fn pop_back(&mut self) -> Option<T> {

        match self.tail.take(){
            None => None,
            Some(tail) => {
                let value = tail.borrow().value;
                match &tail.borrow().prev {
                    None => {
                        self.head = None;
                    },
                    Some(prev_node) => {

                        if let Some(prev_node) = prev_node.upgrade(){
                            self.tail = Some(prev_node);
                        }

                    },
                }
                Some(value)
            },
        }
    }

    fn pop_front(&mut self)-> Option<T> {

        match self.head.take(){
            None => None,
            Some(head) => {
                let value = head.borrow().value;
                match &head.borrow().next {
                    None => {
                        self.tail = None
                    },
                    Some(next_node) => {
                        self.head = Some(next_node.clone());
                    },
                }
                Some(value)
            },
        }

    }
}


#[cfg(test)]

mod tests {
    use super::*;

    #[test]
    fn test_dll(){
        let mut list  = List::new();
        list.push_back(10);
        list.push_back(12);
        list.push_back(13);

        list.push_front(9);


        assert_eq!(list.pop_front(), Some(9));
        assert_eq!(list.pop_back(),Some(13));
        

    }
}