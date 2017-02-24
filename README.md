# skp-ui
Unique UI Design

### font-family
##### variable
$global-font
-apple-system, system-ui, BlinkMacSystemFont,
"Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif !default;

### Custom classes
##### .hidden
display: none !important;
#### .vertical-align-center
vertically center with **flex box**
#### .circle
circle any eliment with overflow hidden
#### .img-full
full width image
#### .select-none
user select none

#### .invisible
for visibility hidden

#### .fixed-top & .fixed-bottom
position fixed

#### .float-left .float-right
float eliment

#### .hide-text
for hiding only text

#### .margin-auto
align eliment to center

#### .heading-```1 to 4```
each number multiply by ```1*1.20em```
###### like
```
.heading-3 {
  font-size: 1.20 * 3;
}
 ```



## display property

**property**
* block
* inline
* inline-block
* none

.```property```



## warning
for validation and colors

```
$color-warning: (
    muted: #8E8E93,
    primary: #007AFF,
    success: #4CD964,
    info: #34AADC,
    warning: #FFCC00,
    danger: #FF3A2D,
    white: #fff,
    black: #000
);

```
.bg-```property```{ background-color: ```value```;}

.txt-```property```{ color: ```value```;}

## width and height and max both of

.w-1 - width: 25%

.w-2 - width: 50%

.w-3 - width: 75%

.w-4 - width: 100%

**simmiller** : mw - max-width, mh - max-height, and h - height


## margin and padding
```
$mp: (
        1: .25em,
        2: .5em,
        3: .75em,
        4: 1em
);
```
**like**

m = margin

p = padding

mt = margin-top

this is also responsive

```
breackpoints

$screen-break: (
        m: 576px,
        t: 768px,
        l: 1024px,
        d: 1224px,
        lr: 1360px,
        xlr: 1440px,
);
```

and ```1 to 4``` each value

```
example
.m-1
.p-3
.mt-1
.pr-4

responsive
.m-l-3
.mb-xl-2
```

## text transform classes
```
.lowercase
.uppercase
.capitlcase
```

## text align
```
.txt-center
.txt-right
.txt-left

responsive
.txt-l-right
.txt-m-right

```

## font-weight
**property**
* bolder
* bold
* normal
* lighter
* inherit


.font-```property```


## list style type
**property**

* circle
* disc
* decimal
* square

.list-```property```


## material box shadow

* .box-shadow-1
* .box-shadow-2
* .box-shadow-3
* .box-shadow-4
* .box-shadow-5
* .box-shadow-6

## border radius

.border-radius-```1 to 6```

.border-radius-```top bottom left right```-```1 to 6```

each number **1*5px**

# flex box
flex box all property and value are defined

```
$fd: (row, row-reverse, column, column-reverse); //flex-direction
$fw: (nowrap, wrap, wrap-reverse); //flex-flow
$jc: (flex-start, flex-end, center, space-between, space-around); //justify-content
$ai: (flex-start, flex-end, center, baseline, stretch); // align item
$ac: (flex-start, flex-end, center, space-between, space-around, stretch); //align-content
$as: (auto, flex-start, flex-end, center, baseline, stretch); // align-self
```

**parent class**

flex ```.flex```

inline flex ```.inline-flex```

###### note this pattorn

first letter

fd = ```f```lex-```d```irection

value like - row row-reverse ....


.property-value


```.fd-row-reverse```



#### this is also responsive

just add ```breakpoint``` after property



.fd-```xl```-row-reverse


.fd-```d```-row-reverse


.fd-```m```-row-reverse




# Grid system

###### breakpoints

* m: 576px,
* t: 768px,
* l: 1024px,
* d: 1224px,
* lr: 1360px,
* xlr: 1440px,

###### parent class

based on flex box

**.grid**


###### 12 column based

#### auto same width column


**.cl**

**like**

<div class="grid">
	<div class="cl"></div>
	<div class="cl"></div>
	<div class="cl"></div>
	<div class="cl"></div>
</div>

**and also**

<div class="grid">
	<div class="cl-2"></div>
	<div class="cl"></div>
	<div class="cl-6"></div>
	<div class="cl"></div>
</div>

#### responsive

after cl

.cl-```m```-3

.cl-```l```-5