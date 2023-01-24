const grid = document.querySelector('.gridArea');

let width=20;
let height=20;
const areaCells = (width * height);

let cellsIdx=[];

function createGridDiv(areaCells){

    for(let i=0;i<areaCells;i++){
        
       const cells =document.createElement('div');
        grid.appendChild(cells).classList.add('grid');
        // cells.innerText=[i]
        cellsIdx.push(cells)

    }

} createGridDiv(areaCells);




function addFocus(Idx){
    cellsIdx[Idx].classList.add('focus')
};

function removeFocus(Idx){
    cellsIdx[Idx].classList.remove('focus')
};





function addCraters(Idx){
    cellsIdx[Idx].classList.add('craters')
};

function addCratersBorder(Idx){
    cellsIdx[Idx].classList.add('craterBorder')
};




// moon

        let moon =[
                    
                28,29,30,31,
            46,47,48,49,50,51,52,53,
        64,65,66,67,68,69,70,71,72,73,74,75,
        83,84,85,86,87,88,89,90,91,92,93,94,95,96,
        103,104,105,106,107,108,109,110,111,112,113,114,115,116,
        122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,
        142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        174,
        175,
        176,
        177,
        178,

        181,
        182,
        183,
        184,
        185,
        186,
        187,
        188,
        189,
        190,
        191,
        192,
        193,
        194,
        195,
        196,
        197,
        198,


        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,

        221,
        222,
        223,
        224,
        225,
        226,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        235,
        236,
        237,
        238,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250,
        251,
        252,
        253,
        254,
        255,
        256,
        257,
        262,
        263,
        264,
        265,
        266,
        267,
        268,
        269,
        270,
        271,
        272,
        273,
        274,
        275,
        276,
        277,
        283,
        284,
        285,
        286,
        287,
        288,
        289,
        290,
        291,
        292,
        293,
        294,
        295,
        296,
        303,
        304,
        305,
        306,
        307,
        308,
        309,
        310,
        311,
        312,
        313,
        314,
        315,
        316,
        324,
        325,
        326,
        327,
        328,
        329,
        330,
        331,
        332,
        333,
        334,
        335,
        346,
        347,
        348,
        349,
        350,
        351,
        352,
        353,
        368,
        369,
        370,
        371,

        ];
        let craters=[91,92,110,111,112,113,130,131,132,133,151,152,
        264,265,266,267,268,284,
        285,
        286,
        287,288,305,
        306,
        307,244,245,
        246,
        247,248,225,
        226,
        227,269,
        
        
        ]
        let cratersBorder=[28,31,178,371,161,110,91,92,113,133,225,226,227,244,248,269,288]

for(let i=0;i<moon.length;i++){
   let stamp = setTimeout(()=>
    {
        addFocus(moon[i])

    }, 1000);
}

for(let i=0;i<craters.length;i++){
    let stamp = setTimeout(()=>
     {
         addCraters(craters[i])
 
     }, 1500);
 }

 for(let i=0;i<cratersBorder.length;i++){
    let stamp = setTimeout(()=>
     {
         addCratersBorder(cratersBorder[i])
 
     }, 2000);
 }




function moveMoonBottom(){
for(let i=0;i<moon.length;i++){
    removeFocus(moon[i])
    moon[i]+=20;
    addFocus(moon[i])
}

}


document.addEventListener("keydown",event=>{

    if(event.code=="KeyS"){

        moveMoonBottom();
    }

});



//  console.table(cellsIdx);


