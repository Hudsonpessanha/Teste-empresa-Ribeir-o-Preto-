function descobrirInterruptores() {

    let interruptor1 = "desligado";
    let interruptor2 = "desligado";
    let interruptor3 = "desligado";
    let lampada1 = "fria";
    let lampada2 = "fria";
    let lampada3 = "fria";

    
    interruptor1 = "ligado";
    lampada1 = "quente"; 
    
    interruptor1 = "desligado";

    
    interruptor2 = "ligado";
    lampada2 = "ligada"; 

    
    interruptor3 = "desligado";

  
    console.log("Vá para a sala das lâmpadas e verifique cada uma:");
    console.log("Lâmpada 1: Está desligada e quente (pertence ao interruptor 1)");
    console.log("Lâmpada 2: Está ligada (pertence ao interruptor 2)");
    console.log("Lâmpada 3: Está desligada e fria (pertence ao interruptor 3)");
}

descobrirInterruptores();
