#include <iostream>
#include <string>
#include <vector>

// not a good practice
using namespace std;

class Codec
{
private:
    int numOfDigits(int k)
    {
        int result = 0;
        if (k == 0)
        {
            return 1;
        }
        while (k != 0)
        {
            result += 1;
            k /= 10;
        }
        return result;
    }

public:
    Codec()
    {
    }

    string encode(vector<string> &strs)
    {
        string res = "";
        for (string s : strs)
        {
            int n = s.size();
            res += to_string(this->numOfDigits(n)) + to_string(n) + s;
        }
        cout << res << endl;
        return res;
    }

    vector<string> decode(string s)
    {
        vector<string> result;
        int n = s.size();
        int i = 0;
        while (i < n)
        {
            int lenSize = s[i] - '0';
            i += 1;

            string lenStr = "";
            for (int k = 0; k < lenSize; k++)
            {
                lenStr += s[i + k];
            }

            int len = stoi(lenStr);
            i += lenSize;
            string tmp = "";
            for (int j = 0; j < len; j++)
            {
                tmp += s[i + j];
            }
            result.push_back(tmp);
            i += len;
        }
        return result;
    }
};

int main()
{
    Codec *c = new Codec();
    vector<string> v;
    v.push_back("neetjeeevitee");
    v.push_back("code");
    v.push_back("love");
    v.push_back("you");

    string encodedString = c->encode(v);
    for (string s : c->decode(encodedString))
    {
        if (s == "")
        {
            cout << "EMPTY" << " ";
        }
        cout << s << " ";
    }
    cout << endl;
    return 0;
}
