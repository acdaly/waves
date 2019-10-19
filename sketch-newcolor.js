var width;
var height;
var curves;
var waveLayers = 11;
var t=[];
var oldTime = 0;
var initialY;
var randomStartTime = 0;

function RGB(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

var colorBlue = new RGB(10, 45, 250);
var colorBabyBlue = new RGB(71, 130, 224);
var colorDarkBlue = new RGB(28, 63, 119);
var colorSkyBlue = new RGB(170, 240, 255);
var colorLightBlue = new RGB(178, 210, 255);
var colorGreen = new RGB(50, 120, 100);
var colorNavy = new RGB(20, 60, 100);
var colorDarkGreen = new RGB(50, 100, 50);
var colorPurple = new RGB(177, 135, 188);
var colorOrange = new RGB(249, 204, 164);
var colorRed = new RGB(201, 92, 116);
var colorTeal = new RGB(76, 226, 239);
var colorLightYellow = new RGB(255, 240, 201);
var colorBlack = new RGB(3, 17, 40);
var colorTrueRed = new RGB(255, 0, 0);

var redList = [colorTrueRed, colorTrueRed, colorTrueRed, colorTrueRed]
var dayColorList = [colorBabyBlue, colorTeal, colorLightBlue, colorBlue];
var sunsetColorList = [colorRed, colorPurple, colorOrange, colorLightBlue];
var nightColorList = [colorDarkGreen, colorGreen, colorLightBlue, colorBlue];
var deepNightColorList = [colorNavy, colorDarkBlue, colorPurple, colorBlue];

//light pastels
var pastelBlue = new RGB(191, 210, 239);
var pastelPink = new RGB(242, 227, 244);
var pastelGreen = new RGB(206, 237, 218);
var colorWhite = new RGB(255, 255, 255);

var dayPastelList = [pastelBlue, pastelGreen, pastelPink, pastelBlue];

//orange & teal
var skyTurq = new RGB(80, 208, 218);
var skyOrange = new RGB(213, 185, 146);

var dirtyOrange = new RGB(165, 174, 156);
var offTeal = new RGB(74, 141, 147);
var darkerTeal = new RGB(1, 108, 130);
var blueEmerald = new RGB(6, 62, 75);

var orangeTealList = [dirtyOrange, offTeal, darkerTeal, blueEmerald];
var orangeTealSky = [skyTurq, skyOrange]

//clearest daytime
var healthyTop = new RGB(37, 167, 198);
var healthyBottom = new RGB(132, 186, 223);

var clearBlue1 = new RGB(56, 150, 176);
var clearBlue2 = new RGB(60, 165, 181);
var clearBlue3 = new RGB(48, 128, 125);
var clearBlue4 = new RGB(110, 201, 189);

var healthyWaves = [clearBlue1, clearBlue2, clearBlue3, clearBlue4];
var healthySky = [healthyTop, healthyBottom]

//natural daytime
var trueBlueSky = new RGB(27, 122, 196);
var trueLightSky = new RGB(165, 236, 255);

var cleanTeal = new RGB(36, 164, 202);
var darkerCleanTeal = new RGB(0, 133, 176);
//darkerTeal
var darkestCleanTeal = new RGB(5, 57, 97);

var cleanWaves = [cleanTeal, darkerCleanTeal, darkerTeal, darkestCleanTeal];
var trueSky = [trueBlueSky, trueLightSky]


//purple-ish pink
var blueTop = new RGB(81, 168, 224);
var purpleIsh = new RGB(166, 168, 217);

var purpleish1 = new RGB(166, 168, 217);
var purpleish2 = new RGB(132, 159, 206);
var purpleish3 = new RGB(83, 119, 186);
var purpleish4 = new RGB(38, 67, 118);

var purpleishWaves = [purpleish1, purpleish2, purpleish3, purpleish4];
var purpleishSky = [blueTop, purpleIsh]

//pink-ish night
var pinkNightTop = new RGB(36, 65, 84);
var pinkish = new RGB(110, 99, 119);

var pinkNight1 = new RGB(77, 86, 103);
var pinkNight2 = new RGB(73, 70, 98);
var pinkNight3 = new RGB(34, 44, 78);
var pinkNight4 = new RGB(15, 37, 46);

var pinkNightWaves = [pinkNight1, pinkNight2, pinkNight3, darkestCleanTeal];
var pinkishSky = [pinkNightTop, pinkish]
//

//moonlight night
var moonlightTop = new RGB(0, 11, 39);
var moonlightBottom = new RGB(8, 87, 144);

var moonlight1 = new RGB(138, 195, 218);
var moonlight2 = new RGB(7, 85, 140);
var moonlight3 = new RGB(0, 41, 76);
var moonlight4 = new RGB(3, 16, 40);

var moonlightWaves = [moonlight1, moonlight2, moonlight3, moonlight4];
var moonlightSky = [moonlightTop, moonlightBottom]
//

//red sunset
var redSunTop = new RGB(61, 48, 62);
var redSunBottom = new RGB(242, 91, 107);

var redSun1 = new RGB(242, 91, 107);
var redSun2 = new RGB(109, 33, 85);
var redSun3 = new RGB(78, 26, 61);
var redSun4 = new RGB(29, 15, 28);

var redSunWaves = [redSun1, redSun2, redSun3, redSun4];
var redSunSky = [redSunTop, redSunBottom]
//


//orange sunset
var orangeSunTop = new RGB(109, 160, 157);
var orangeSunBottom = new RGB(252, 159, 107);

var orangeSun1 = new RGB(160, 126, 106);
var orangeSun2 = new RGB(191, 139, 101);
var orangeSun3 = new RGB(84, 110, 96);
var orangeSun4 = new RGB(67, 66, 68);

var orangeSunWaves = [orangeSun1, orangeSun2, orangeSun3, orangeSun4];
var orangeSunSky = [orangeSunTop, orangeSunBottom]
//



var colorList = [colorGreen, colorTeal, offTeal, blueEmerald]; //global var for waves
var twoDColorLists = [orangeTealList, healthyWaves, cleanWaves,cleanWaves, orangeSunWaves,redSunWaves, pinkNightWaves, moonlightWaves,moonlightWaves, purpleishWaves];


var backgroundList = [colorLightBlue, colorSkyBlue]; //global var for sky
var twoDBackgroundList = [orangeTealSky, healthySky, trueSky,trueSky, orangeSunSky,redSunSky, pinkishSky, moonlightSky,moonlightSky, purpleishSky,];



function createNoiseList(p){
    var pointList = [];
    for (var i = 0; i < 40 +1; i++) {
        p.append(pointList, p.random(0, 500));
    }
    return pointList;
}

function create2DNoiseList(p) {
    for (var i = 0; i<waveLayers; i++){
        p.append(t, createNoiseList(p));
    }
}

function getTwean(c1, c2, progress, z, p) {
    //progress is 0 to 1
    var twean = {
    'r': 0,
    'g': 0,
    'b': 0
}

    var noiseOffset = p.noise(t[z][1])*80 - 20;
    // if (z == waveLayers - 1){
    //     noiseOffset = 0;
    // }
    twean.r = c1.r + (c2.r - c1.r)* progress + noiseOffset;
    twean.g = c1.g + (c2.g - c1.g)* progress + noiseOffset;
    twean.b = c1.b + (c2.b - c1.b)* progress + noiseOffset;
    if (twean.r < 0) twean.r = 0;
    if (twean.g < 0) twean.g = 0;
    if (twean.b < 0) twean.b = 0;
    if (twean.r > 255) twean.r = 255;
    if (twean.g > 255) twean.g = 255;
    if (twean.b > 255) twean.b = 255;
    return twean;
}

function getListTwean(c1, c2, progress) {
    //progress is 0 to 1
    var twean = {
    'r': 0,
    'g': 0,
    'b': 0
}
    
    twean.r = c1.r + (c2.r - c1.r)* progress;
    twean.g = c1.g + (c2.g - c1.g)* progress;
    twean.b = c1.b + (c2.b - c1.b)* progress;
    return twean;
}

function updateList(progress, oceanTimeIndex, backgroundTimeIndex, p) {
    if (backgroundTimeIndex == twoDBackgroundList.length - 1){
        backgroundList[0] = getListTwean(twoDBackgroundList[backgroundTimeIndex][0], twoDBackgroundList[0][0], progress);
        backgroundList[1] = getListTwean(twoDBackgroundList[backgroundTimeIndex][1], twoDBackgroundList[0][1], progress);
    }
    else{
        backgroundList[0] = getListTwean(twoDBackgroundList[backgroundTimeIndex][0], twoDBackgroundList[backgroundTimeIndex+1][0], progress);
        backgroundList[1] = getListTwean(twoDBackgroundList[backgroundTimeIndex][1], twoDBackgroundList[backgroundTimeIndex+1][1], progress);
    }
    for (var i = 0; i < colorList.length; i++) {
        
        if (oceanTimeIndex == twoDColorLists.length - 1){
        //to fade from last index/list to first index/list
            colorList[i] = getListTwean(twoDColorLists[oceanTimeIndex][i], twoDColorLists[0][i], progress);
        }
        else {
            colorList[i] = getListTwean(twoDColorLists[oceanTimeIndex][i], twoDColorLists[oceanTimeIndex + 1][i], progress);
        }
    }
    
}

function getTimeProgress(p){
    // returns progress (0.0 - 1.0), the percentage between the lists in twoDColorLists
    var colorChangeSpeed = 200;
    return (( (p.millis()  + randomStartTime)/ colorChangeSpeed) % 100) * .01;
    
}

function getTimeIndex(list, p){ 
    var colorChangeSpeed = 200;
    return p.int((( (p.millis() + randomStartTime) / colorChangeSpeed) % (100 * list.length)) * .01);

}

/* 
 * from https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
 * accepts parameters
 * r  Object = {r:x, g:y, b:z}
 * OR 
 * r, g, b
*/
function RGBtoHSV(r, g, b) {
    if (arguments.length === 1) {
        g = r.g, b = r.b, r = r.r;
    }
    var max = Math.max(r, g, b), min = Math.min(r, g, b),
        d = max - min,
        h,
        s = (max === 0 ? 0 : d / max),
        v = max / 255;

    switch (max) {
        case min: h = 0; break;
        case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
        case g: h = (b - r) + d * 2; h /= 6 * d; break;
        case b: h = (r - g) + d * 4; h /= 6 * d; break;
    }

    return {
        h: h,
        s: s,
        v: v
    };
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

function fillColor(z, p){
    //color progression of the waves
    //z=0 is the furthest in space
    // var hue = 20*z + 80;
    // var saturation = 8 * (z);
    // var brightness = 70 + (z*2.5);
    // if (z == waveLayers - 1){
    //     saturation = 8 * (z - 3);
    //     brightness = 20;
    // }

    // var hsbString='hsb('+p.str(hue)+','+p.str(saturation)+'%,'+p.str(brightness)+'%)';

    var index = p.int(z*((colorList.length -1)/waveLayers)); //index in colorList to get twean of
    var progressIndex = z % (waveLayers/(colorList.length - 1));
    var progress = progressIndex / (waveLayers/(colorList.length-1));

    var newTwean = getTwean(colorList[index], colorList[index+1], progress, z, p);

    // if (z == waveLayers - 1){
    //     var hsvTwean = RGBtoHSV(newTwean);
    //     hsvTwean.s -= 0.1;
    //     hsvTwean.v -= 0.2;
    //     newTwean = HSVtoRGB(hsvTwean);
    // }
    var rgbString='rgb('+p.int(newTwean.r)+','+p.int(newTwean.g)+','+p.int(newTwean.b) +')';



    //update background of lower div

    // $('.gallery-cell').css('box-shadow', '0 0 50px 5px black inset');
    // $('.gallery-cell').css('box-shadow', '0 0 20px 10px ' + rgbString + ' inset');
    return p.color(rgbString);
}

function drawOcean(p){
    var yOffset = 2;
    var yPower = 20;
    var xDist = width/curves;
    var xDistOffset = 1;
    var x, y;
    for (var z = 0; z < waveLayers; z++){
        
        p.beginShape();
        p.fill(fillColor(z, p));
        p.curveVertex(0, height);
        p.curveVertex(0, height);
        for (var i = 0; i < curves + 1; i++) {
            p.strokeWeight(0);
            x = (xDist+xDistOffset) * i;
            //initalY is portion of the screen the waves will cover,
            //yOffset is the change between each individual wave
            y = initialY + yOffset +(yPower * p.noise(t[z][i]));
            if (i==0){p.curveVertex(x, y + 10);}
            p.curveVertex(x, y);
            // strokeWeight(5);
            p.point(x, y);
            t[z][i] += (p.millis() - oldTime) / 4000
        }
        
        // strokeWeight(1);
        p.curveVertex(x, y);
        p.curveVertex(x, height);
        p.curveVertex(x, height);
        p.endShape();
        yOffset*=1.09 + 0.5 ;
        yPower*= 1.15;
        xDistOffset*=1.6;
    }
    oldTime = p.millis();
}

function drawBackgroundGradient(x, y, w, h, color1, color2, p){
    //refrences code from https://p5js.org/examples/color-linear-gradient.html
    var c1 = p.color(color1.r, color1.g, color1.b);
    var c2 = p.color(color2.r, color2.g, color2.b);
    p.strokeWeight(1);
    for (var i = y; i <= y+h; i++) {
      var inter = p.map(i, y, y+h, 0, 1);
      var c = p.lerpColor(c1, c2, inter);
      p.stroke(c);
      p.line(x, i, x+w, i);
    }
}

function p1Draw(p) {
    //(p.windowWidth+50) accounts for the extra canvas for when resizing bigger
    if (width < (p.windowWidth+50) - 50 || width > (p.windowWidth+50) + 50 
        || height > p.windowHeight + 50 || height < p.windowHeight - 80){
        width = p.windowWidth + 50;
        height = p.windowHeight;
        resize(p);
        var cnv = p.createCanvas(width, height);
        // cnv.parent('home-sketch');
        curves = p.int(width/50);
    }
    
    var oceanTimeIndex = getTimeIndex(twoDColorLists, p);
    var backgroundTimeIndex = getTimeIndex(twoDBackgroundList, p);
    var timeProgress = getTimeProgress(p);
    updateList(timeProgress, oceanTimeIndex, backgroundTimeIndex, p);
    if (p.millis() > oldTime +40){
        drawBackgroundGradient(0, 0, width, initialY+ 80, backgroundList[0], backgroundList[1], p);
        drawOcean(p);
    } 
    
}

function resize(p){
    //Phone
    if (width < 500){
        initialY = p.int(height*(9/12)) - 20;
    }
    //Desktop
    else{
        initialY = p.int(height*(2/3)) - 20;
    }
}

function p1Setup(p) {
    width = p.windowWidth + 50;
    height = p.windowHeight;
    resize(p);
    randomStartTime  = p.random(0, 100000);
    var cnv = p.createCanvas(width, height);
    // cnv.parent('home-sketch');
    
    curves = p.int(width/50);
    create2DNoiseList(p);

}



var s = function( p ) { // p could be any variable name
  p.setup = function() {
    p1Setup(p);
  };

  p.draw = function() {
    p1Draw(p);
  };
};
var myp5 = new p5(s, 'home-sketch');




