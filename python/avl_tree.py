#TODO: Modularise this and other folders

# AVL Tree


#Create a tree node 
class TreeNode():
    def __init__(self,val:int):
        self.value = val
        self.left: TreeNode = None
        self.right: TreeNode = None
        self.height = 1
        

# Create a AVL Tree class

class AVLTree():
    def insert_node(self,val:int):
        None

    
    def insert_node(self,root:TreeNode,val:int):
        if root is None:
            root = TreeNode(val)
            
        elif root.value > val:
            self.insert_node(root.left,val)   
        
        else:
            self.insert_node(root.right,val)   
            
        root.height = 1 + max(self.get_height(root.left),self.get_height(root.right))
        
        # Update the balance factor and balance the tree
        balance_factor = self.get_balance_factor(root)
        if balance_factor > 1:
            # Right skewed
            None
        
        elif balance_factor < -1:
            # left skewed
            None
        
        None
    
    def get_height(self,root) -> int:
        if(root is None):
            return 0
        
        return 1 + max(self.find_height(root.left),self.find_height(root.right))

    def get_balance_factor(self,root) -> int :
        if root is None:
            return 0
        
        return self.get_height(root.right)  - self.get_height(root.left)
    
    
    def preorder(self,root:TreeNode):
        if root is None:
            return
        
        print(f"{root.key} ")
        self.preorder(root.left)
        self.preorder(root.right)


print("Hello")