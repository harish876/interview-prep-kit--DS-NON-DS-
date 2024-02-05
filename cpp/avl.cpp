#include<iostream>
#include<vector>

using namespace std;

int main() {
    vector<int>a;
    for(int i=0;i<5;i++){
        a.push_back(i+1);
    }
    for(int it:a){
        cout<<it<<"\n";
    }
    return 0;
}