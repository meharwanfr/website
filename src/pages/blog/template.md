---
layout: ../../layouts/BlogLayout.astro
slug: "template"
title: "Template Blog"
description: "This is just a template blog to test out my blog's ui and its just here for the demo, I may remove this in future tho."
pubDate: 2026-08-10
updatedDate: 2026-09-10
tags:
  - astro
  - web-dev
  - template
author: "Meharwan Singh"
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Drawing%2C_The_State_Coach%2C_ca._1856_%28CH_18348079%29.jpg/500px-Drawing%2C_The_State_Coach%2C_ca._1856_%28CH_18348079%29.jpg"
draft: false
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

<br>

A list of list thingy :-

- list **thingy 1**
- list ~thingy 2~
- list _thingy 3_

<br>

## Code Snippets :-

```js
// JavaScript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require("./lang/" + l);
  return true;
};
```

```cpp
#include "test.hpp"
#include <iostream>
#include <string>
using namespace std;

void print(string str);

int main() {
  int list[5] = {1, 2, 3, 4, 5};

  int arr2[5] = {1,2,3};

  int lenght = sizeof(list) / sizeof(list[0]);

  print(to_string(list[0]));

	 for (int i = 0; i < lenght; i++) {
	   print(to_string(list[i]));
	   print("");
	   print(to_string(i));
	   print("------------");
	   print("");
	 }

  print(to_string(lenght));

  cout << lenght << " ";

  for (int num : list) {
    cout << num << " ";
  }

  cout << sizeof(arr2)<< endl;

  // string str = "hello";
  // int x = 10;
  // int *ptr = &x;
  //
  // string *str_ptr = &str;
  //
  // cout << "values :- (using *)" << endl;
  // cout << str << endl;
  // cout << *str_ptr << endl;
  //
  // cout << "------------" << endl;
  //
  // cout << "addresses :- (using &)" << endl;
  // cout << &x << endl;
  // cout << ptr << endl;

  std::cout << get_welcome_msg() << std::endl;
  return 0;
}

void print(string str) { cout << str << endl; }

```

<br>

<hr>
