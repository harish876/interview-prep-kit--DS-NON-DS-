use std::{
    cell::RefCell,
    rc::{Rc, Weak},
};
#[derive(Debug)]
pub struct Node<T> {
    pub value: T,
    next: Option<Rc<RefCell<Node<T>>>>,
    prev: Option<Weak<RefCell<Node<T>>>>,
}

impl<T: Copy> From<Node<T>> for Option<Rc<RefCell<Node<T>>>> {
    fn from(value: Node<T>) -> Self {
        Some(Rc::new(RefCell::new(value)))
    }
}

impl<T: Copy> Node<T> {
    fn new(value: T) -> Node<T> {
        Node {
            value,
            next: None,
            prev: None,
        }
    }
}

type NodePtr<T> = Rc<RefCell<Node<T>>>;

pub struct List<T> {
    head: Option<NodePtr<T>>,
    tail: Option<NodePtr<T>>,
}

impl<T: Copy> List<T> {
    pub fn new() -> List<T> {
        List {
            head: None,
            tail: None,
        }
    }

    pub fn push_back(&mut self, value: T) {
        let mut node = Node::new(value);
        match &mut self.tail.take() {
            None => {
                self.head = node.into();
                self.tail = self.head.clone();
            }
            Some(current_tail) => {
                node.prev = Some(Rc::downgrade(current_tail));
                self.tail = node.into();
                current_tail.borrow_mut().next = self.tail.clone();
            }
        }
    }

    pub fn pop_back(&mut self) -> Option<T> {
        match &mut self.tail.take() {
            None => None,
            Some(tail) => {
                let tail = tail.borrow_mut();
                let prev = &tail.prev;
                match prev {
                    None => {
                        self.head.take();
                    }
                    Some(prev) => {
                        if let Some(prev) = prev.upgrade() {
                            prev.borrow_mut().next = None;
                            self.tail = Some(prev.clone());
                        }
                    }
                }
                Some(tail.value)
            }
        }
    }

    pub fn pop_front(&mut self) -> Option<T> {
        match &mut self.head.take() {
            None => None,
            Some(head) => {
                let head = head.borrow_mut();
                let next = &head.next;
                match next {
                    None => {
                        self.tail.take();
                    }
                    Some(next) => {
                        next.borrow_mut().prev = None;
                        self.head = Some(next.clone());
                    }
                }
                Some(head.value)
            }
        }
    }

    pub fn push_front(&mut self, value: T) {
        let mut node = Node::new(value);

        match &mut self.head.take() {
            None => {
                self.head = node.into();
                self.tail = self.head.clone();
            }
            Some(curr_head) => {
                node.next = Some(curr_head.clone());
                self.head = node.into();
                if let Some(h) = &self.head {
                    curr_head.borrow_mut().prev = Some(Rc::downgrade(h))
                }
            }
        }
    }
}

#[cfg(test)]

mod tests {

    use super::*;

    #[test]
    fn it_test_dll() {
        let mut list: List<i32> = List::new();

        list.push_back(1);
        list.push_back(2);
        list.push_back(3);
        list.push_back(4);

        assert_eq!(list.pop_back(), Some(4));
        assert_eq!(list.pop_front(), Some(1));
        assert_eq!(list.pop_back(), Some(3));
        assert_eq!(list.pop_front(), Some(2));
        assert_eq!(list.pop_front(), None);

        list.push_front(6);
        assert_eq!(list.pop_front(), Some(6));
    }
}

//puli juice
//rasam powder
//perungayam
//kadugu + jeeragam +
