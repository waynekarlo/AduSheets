    // DECLARATIONS
    var selectedOperation;
    // USERNAME
    var Name="";
    var TimeRemaining=0;
    function register()
    {
        Name = document.getElementById('Username').value;
        document.getElementById('GameNa').innerHTML= "Welcome, "+ Name;
        document.getElementById('OperationOptions').style.display = 'block';
        document.getElementById('reg').style.display = 'none';
    }
    function chooseOperation(operation)
    {   
        selectedOperation = operation;
        switch(operation)
        {
            case 'addition':
                document.getElementById('DifficultyOptions').style.display = 'block';
                document.getElementById('btnSub').style.display = 'none';
                document.getElementById('btnMul').style.display = 'none';
                document.getElementById('btnDiv').style.display = 'none';
                document.getElementById('btnNom').style.display = 'none';
            return 'addition';

            case 'subtraction':
                document.getElementById('DifficultyOptions').style.display = 'block';
                document.getElementById('btnAdd').style.display = 'none';
                document.getElementById('btnMul').style.display = 'none';
                document.getElementById('btnDiv').style.display = 'none';
                document.getElementById('btnNom').style.display = 'none';
            return subtraction;

            case 'multiplication':
                //code
                document.getElementById('DifficultyOptions').style.display = 'block';
                document.getElementById('btnAdd').style.display = 'none';
                document.getElementById('btnSub').style.display = 'none';
                document.getElementById('btnDiv').style.display = 'none';
                document.getElementById('btnNom').style.display = 'none';
            return 'multiplication';

            
            case 'division':
                //code
                document.getElementById('DifficultyOptions').style.display = 'block';
                document.getElementById('btnSub').style.display = 'none';
                document.getElementById('btnMul').style.display = 'none';
                document.getElementById('btnAdd').style.display = 'none';
                document.getElementById('btnNom').style.display = 'none';
            return 'division';

            case 'nomials':
                //code
                document.getElementById('DifficultyOptions').style.display = 'block';
                document.getElementById('btnSub').style.display = 'none';
                document.getElementById('btnMul').style.display = 'none';
                document.getElementById('btnDiv').style.display = 'none';
                document.getElementById('btnAdd').style.display = 'none';
            return 'nomials'
        }
        console.log(selectedOperation);
    }

    // DIFFICULTY
    function chooseDifficulty(difficulty){
        
        switch(difficulty)
        {
            case 'easy':
                easy(3,6);
                // DECLARATION
                TimeRemaining = 600;
                document.getElementById('StartButton').style.display = 'block';
                document.getElementById('btnMedium').style.display = 'none';
                document.getElementById('btnHard').style.display = 'none';
            break;

            case 'medium':
                medium(4,5);   
                TimeRemaining = 1200;
                document.getElementById('StartButton').style.display = 'block';
                document.getElementById('btnEasy').style.display = 'none';
                document.getElementById('btnHard').style.display = 'none';
            break;

            case 'hard':
                hard(5,9);
                TimeRemaining = 1800;
                document.getElementById('StartButton').style.display = 'block';
                document.getElementById('btnEasy').style.display = 'none';
                document.getElementById('btnMedium').style.display = 'none';
                    
            break;
        }      
    }               
    
    
    function easy(x,y) {

        for (ordinate=1;ordinate<=y;ordinate++)
        {
            let operation=selectedOperation;
        gen+='<tr>\n';
    
            for (abscissa=1;abscissa<=x;abscissa++)
            {
                let num1 = Math.floor(Math.random() * 100) + 50;
                let num2 = Math.floor(Math.random() * 50) + 1;
                let oper, result;
                if (operation === 'addition') {
                    oper = '+';
                    result = num1 + num2;
                    result = result.toString();
                }
                else if (operation === 'subtraction'){
                    oper = '-';
                    result = num1 - num2;
                }
                
                else if (operation === 'multiplication') {
                    oper = 'x';
                    result = num1 * num2;
                    
                }
                else if (operation === 'division') {
                    oper = '÷';
                    result = num1 / num2;
                    result = result.toFixed(2);
                }
                num++
                gen+='<td><div class="tbl" id="sheet' + num + '">&nbsp;<br/>'+num1+'<br/>'+oper+' '+num2+'<br/>= '+result+'\n<input type="text" id="answer'+ num +'" size="8"><button></div></td>\n';
                /*answer = document.getElementById('answer' + num).parseFloat().value;
                if(result = answer){
                    document.getElementById('answer'+ num).style.color = 'green';
                }
                else{
                    document.getElementById('answer' + num).style.color = 'red';
                }*/
            }
            gen+='<tr>\n';
        
            document.getElementById('tbl').innerHTML=gen;
            
            console.log(gen);
        }
        gen+='<button id="" onclick="showSolution()">Show Solution!</button>';
    }
    function medium(x,y) {
        for (ordinate=1;ordinate<=y;ordinate++)
        {
            let operation=selectedOperation;
        gen+='<tr>\n';
    
            for (abscissa=1;abscissa<=x;abscissa++)
            {
                let num1 = Math.floor(Math.random() * 1000) + 50;
                let num2 = Math.floor(Math.random() * 500) + 1;
                let oper, result;
                if (operation === 'addition') {
                    oper = '+';
                    result = num1 + num2;
                    result = result.toString();
                }
                else if (operation === 'subtraction'){
                    oper = '-';
                    result = num1 - num2;
                }
                
                else if (operation === 'multiplication') {
                    oper = 'x';
                    result = num1 * num2;
                    
                }
                else if (operation === 'division') {
                    oper = '÷';
                    result = num1 / num2;
                    result = result.toFixed(2);
                }
                num++
                gen+='<td><div class="tbl" id="sheet' + num + '">&nbsp;<br/>'+num1+'<br/>'+oper+' '+num2+'<br/>= '+result+'\n<input type="text" id="answer'+ num +'" size="8"><button></div></td>\n';
                /*answer = document.getElementById('answer' + num).parseFloat().value;
                if(result = answer){
                    document.getElementById('answer'+ num).style.color = 'green';
                }
                else{
                    document.getElementById('answer' + num).style.color = 'red';
                }*/
            }
            gen+='<tr>\n';
        
            document.getElementById('tbl').innerHTML=gen;
            
            console.log(gen);
        }
        gen+='<button id="" onclick="showSolution()">Show Solution!</button>';
    }
    function hard(x,y) {
        for (ordinate=1;ordinate<=y;ordinate++)
        {
            let operation=selectedOperation;
        gen+='<tr>\n';
    
            for (abscissa=1;abscissa<=x;abscissa++)
            {
                let num1 = Math.floor(Math.random() * 10000) + 50;
                let num2 = Math.floor(Math.random() * 5000) + 1;
                let oper, result;
                if (operation === 'addition') {
                    oper = '+';
                    result = num1 + num2;
                    result = result.toString();
                }
                else if (operation === 'subtraction'){
                    oper = '-';
                    result = num1 - num2;
                }
                
                else if (operation === 'multiplication') {
                    oper = 'x';
                    result = num1 * num2;
                    
                }
                else if (operation === 'division') {
                    oper = '÷';
                    result = num1 / num2;
                    result = result.toFixed(2);
                }
                num++
                gen+='<td><div class="tbl" id="sheet' + num + '">&nbsp;<br/>'+num1+'<br/>'+oper+' '+num2+'<br/>= '+result+'\n<input type="text" id="answer'+ num +'" size="8"><button></div></td>\n';
                /*answer = document.getElementById('answer' + num).parseFloat().value;
                if(result = answer){
                    document.getElementById('answer'+ num).style.color = 'green';
                }
                else{
                    document.getElementById('answer' + num).style.color = 'red';
                }*/
            }
            gen+='<tr>\n';
        
            document.getElementById('tbl').innerHTML=gen;
            
            console.log(gen);
        }
        gen+='<button id="" onclick="showSolution()">Show Solution!</button>';
    }
    // GENERATOR
    function addition()
    {

    }
    function subtraction()
    {
        
    }
    function multiplication()
    {
        
    }
    function division()
    {
        
    }
    function nomials()
    {
        
    }
    // FUNCTIONALITIES
    var gen="";
    var num=0;
    function Start()
    {
        document.getElementById('hidesheet').style.display='block';
        document.getElementById('OperationOptions').style.display='none';
        document.getElementById('DifficultyOptions').style.display='none';
        document.getElementById('StartButton').style.display = 'none';
        solvingTimer()
    }
    
    function calculateTotalScore()
    {
        
    }

    function showSolution()
    {
        
    }

    function solvingTimer()
    {
        document.getElementById('timer').innerHTML = "Time Remaining: " + SecondsToMinutes(TimeRemaining); 
        if (timeRemaining > 0) {
            timeRemaining--;
            setTimeout(solvingTimer, 1000); 
        } else {
            gameOver();
        }
    }

    function SecondsToMinutes(seconds){
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;
        var formattedMinutes;
        if (minutes<10){
            formattedMinutes = 0 + minutes;
        }
        else{
            formattedMinutes = minutes;
        }
        var formattedSeconds;
        if (remainingSeconds < 10) {
            formattedSeconds = '0' + remainingSeconds;
        } else {
            formattedSeconds = remainingSeconds;
        }
        
        return formattedMinutes + ':' + formattedSeconds;
    }

    function gameOver() {
        alert("Time's up!");
    }

    function recordAttemmpt()
    {

    }   
