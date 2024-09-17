

function nextInSequenceA() {
    const sequenceA = [1, 3, 5, 7];
    const nextElement = sequenceA[sequenceA.length - 1] + 2; 
    
    console.log(`a) ${nextElement}`);
}

function nextInSequenceB() {
    const sequenceB = [2, 4, 8, 16, 32, 64];
    const nextElement = sequenceB[sequenceB.length - 1] * 2; 
    
    console.log(`b) ${nextElement}`);
}

function nextInSequenceC() {
    const sequenceC = [0, 1, 4, 9, 16, 25, 36];
    const nextIndex = sequenceC.length;
    const nextElement = nextIndex * nextIndex; 

    console.log(`c) ${nextElement}`);
}


function nextInSequenceD() {
    const sequenceD = [4, 16, 36, 64];
    
    const nextIndex = sequenceD.length + 1; 
    const nextElement = nextIndex * nextIndex * 4; 
    
    console.log(`d) ${nextElement}`);
}


function nextInSequenceE() {
    const sequenceE = [1, 1, 2, 3, 5, 8];
    
    const nextElement = sequenceE[sequenceE.length - 1] + sequenceE[sequenceE.length - 2]; // Soma dos dois últimos
    
    console.log(`e) ${nextElement}`);
}


function nextInSequenceF() {
    const sequenceF = [2, 10, 12, 16, 17, 18, 19];
    const nextElement = 20;
    
    console.log(`f) ${nextElement}`);
}

nextInSequenceA();
nextInSequenceB();
nextInSequenceC();
nextInSequenceD();
nextInSequenceE();
nextInSequenceF();
