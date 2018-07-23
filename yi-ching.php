<?php

	//時間占(小時占)
	function hour_diviation(){
		//initialization variables
		year    = 0;
		month   = 0;
		day		= 0;
		hour 	= 0;
		gram 	= 0;
		first_line = 0;
		second_line = 0;
		third_line = 0;
		forth_line = 0;
		fifth_line = 0;
		sixth_line = 0;
		six_lines  = array();

		//set variables for now
		year 	= date('Y');
		month	= date('n');
		day 	= date('j');
		hour 	= date('G');

		//取得上下卦、動爻
		gram = _get_gram( year, month, day, hour);
		
		//設定上下卦、動爻
		above = gram[0];
		below = gram[1];
		dynamic_line = gram[2];

		//設各爻陰陽
		six_lines = _get_six_line( above, below, dynamic_line);

		//取得本卦名
		gram_name[] = _six_lines_to_hexagram_name( six_lines);

		//動爻取卦
		dynamic_gram = _change_dynamic_line( six_lines);

		//取得動爻名
		gram_name[] = _six_lines_to_hexagram_name(dynamic_gram);

		return gram_name[0]+'之'+gram_name[1]+'卦';

	}


	function _get_gram( year, month, day, hour){
		/*取得上下卦*/
		//initialization variables
		above = 0;
		below = 0;
		dynamic_line = 0;
		gram = array();
		
		//calculate above and below
		above = ( year+ month+ day)%8;
		below = ( year+ month+ day+ hour)%8;
		
		//calculate dynamic_line
		dynamic_line = ( year+ month+ day+ hour)%6;
		
		//check 
		if( above === 0 )
		{ above = 8;}
		if( below === 0 )
		{ below = 8;}
		if( dynamic_line ===0)
		{ dynamic_line = 6 ;}

		gram[]=( above, below, dynamic_line);
		
		return gram ;
		
		
	}

	function _get_six_line( above, below, dynamic_line)
	{
		/*由上下卦得六爻*/
		//initialization variables
		first_line = 0;
		second_line = 0;
		third_line = 0;
		forth_line = 0;
		fifth_line = 0;
		sixth_line = 0;
		result = 0;
		
		
		/*
			上下卦餘序一二三爻對應 
			乾(111)兌(112)離(121)震(122)巽(211)坎(212)艮(221)坤(222)
		*/
			
		switch (below))
		{
			case 1 :
				first_line  = 1;
				second_line = 1;
				third_line  = 1;
				break;
			case 2 :
				first_line  = 1;
				second_line = 1;
				third_line  = 2;
				break;
			case 3 :
				first_line  = 1;
				second_line = 2;
				third_line  = 1;
				break;
			case 4 :
				first_line  = 1;
				second_line = 2;
				third_line	= 2;
				break;
			case 5 :
				first_line	= 2;
				second_line	= 1;
				third_line  = 1;
				break;
			case 6 :
				first_line 	= 2;
				second_line	= 1;
				third_line	= 2;
				break;
			case 7 :
				first_line 	= 2;
				second_line	= 2;
				third_line  = 1;
				break;
			case 8 :
				first_line	= 2;
				second_line	= 2;
				third_line	= 2;
				break;
		}
		switch (above)
		{
			case 1 :
				forth_line  = 1;
				fifth_line = 1;
				sixth_line  = 1;
				break;
			case 2 :
				forth_line  = 1;
				fifth_line = 1;
				sixth_line  = 2;
				break;
			case 3 :
				forth_line  = 1;
				fifth_line = 2;
				sixth_line  = 1;
				break;
			case 4 :
				forth_line  = 1;
				fifth_line = 2;
				sixth_line	= 2;
				break;
			case 5 :
				forth_line	= 2;
				fifth_line	= 1;
				sixth_line  = 1;
				break;
			case 6 :
				forth_line 	= 2;
				fifth_line	= 1;
				sixth_line	= 2;
				break;
			case 7 :
				forth_line 	= 2;
				fifth_line	= 2;
				sixth_line  = 1;
				break;
			case 8 :
				forth_line	= 2;
				fifth_line	= 2;
				sixth_line	= 2;
				break;
		}
		result = first_line;
		result[] = second_line;
		result[] = third_line;
		result[] = forth_line;
		result[] = fifth_line;
		result[] = sixth_line;
		result[] = dynamic_line;

		return result;
			
	}

	function _change_dynamic_line(lines){
		/*動爻操作*/
		//initialization varibles
		output = 0;
		first_line   = 0;
		second_line  = 0;
		third_line   = 0;
		forth_line   = 0;
		fifth_line   = 0;
		sixth_line   = 0;
		dynamic_line = 0;
		//set dynamic_line
		dynamic_line = lines[6];
		//set six lines form input
		first_line  = linse[0] ;
		second_line = lines[1] ;
		third_line  = lines[2] ;
		forth_line  = lines[3] ;
		fifth_line  = lines[4] ;
		sixth_line  = lines[5] ;
		//change_line
		switch(dynamic_line)
		{
			case 0:
				sixth_line  = (sixth_line +1) %2;
				break;
			case 1:
				first_line  = (first_line +1) %2;
				break;
			case 2:
				second_line = (second_line +1) %2;
				break;
			case 3:
				third_line  = (third_line +1) %2;
				break;
			case 4:
				forth_line  = (forth_line +1) %2;
				break;
			case 5:
				fifth_line  = (fifth_line +1) %2;
				break;
		}
		result[] = first_line;
		result[] = second_line;
		result[] = third_line;
		result[] = forth_line;
		result[] = fifth_line;
		result[] = six_line;

		return result ;
	}
	
	function _six_lines_to_hexagram_name(lines){
		/*輸入六爻取卦名*/
		//initialization varibles
		number = 0;
		output = 0;
		first_line   = 0;
		second_line  = 0;
		third_line   = 0;
		forth_line   = 0;
		fifth_line   = 0;
		sixth_line   = 0;

		//set six lines form input
		first_line  = linse[0] %2;
		second_line = lines[1] %2;
		third_line  = lines[2] %2;
		forth_line  = lines[3] %2;
		fifth_line  = lines[4] %2;
		sixth_line  = lines[5] %2;

		//calculate binary sum
		number = first_line*32 + second_line*16 + third_line*8 + forth_line*4 + fifth_line*2 + sixth_line*1 ;

		switch(number){
			case 0 :
				output = '坤' ;
				break;
			case 1 :
				output = '剝' ;
				break;
			case 2 :
				output = '比' ;
				break;
			case 3 :
				output = '觀' ;
				break;
			case 4 :
				output = '豫' ;
				break;
			case 5 :
				output = '晉' ;
				break;
			case 6 :
				output = '萃' ;
				break;
			case 7 :
				output = '否' ;
				break;
			case 8 :
				output = '謙' ;
				break;
			case 9 :
				output = '艮' ;
				break;
			case 10:
				output = '蹇' ;
				break;
			case 11:
				output = '漸' ;
				break;
			case 12:
				output = '小過' ;
				break;
			case 13:
				output = '旅' ;
				break;
			case 14:
				output = '咸' ;
				break;
			case 15:
				output = '遯' ;
				break;
			case 16:
				output = '師' ;
				break;
			case 17:
				output = '蒙' ;
				break;
			case 18:
				output = '坎' ;
				break;
			case 19:
				output = '渙' ;
				break;
			case 20:
				output = '解' ;
				break; 
			case 21:
				output = '未濟' ;
				break;
			case 22:
				output = '困' ;
				break;
			case 23:
				output = '訟' ;
				break;
			case 24:
				output = '升' ;
				break;
			case 25:
				output = '蠱' ;
				break;
			case 26:
				output = '井' ;
				break;
			case 27:
				output = '巽' ;
				break;
			case 28:
				output = '恆' ;
				break;
			case 29:
				output = '鼎' ;
				break;
			case 30:
				output = '大過' ;
				break;
			case 31:
				output = '姤' ;
				break;
			case 32:
				output = '復' ;
				break;
			case 33:
				output = '頤' ;
				break;
			case 34:
				output = '屯' ;
				break;
			case 35:
				output = '益' ;
				break;
			case 36:
				output = '震' ;
				break;
			case 37:
				output = '噬嗑' ;
				break;
			case 38:
				output = '隨' ;
				break;
			case 39:
				output = '无妄' ;
				break;
			case 40:
				output = '明夷' ;
				break;
			case 41:
				output = '賁' ;
				break;
			case 42:
				output = '既濟' ;
				break;
			case 43:
				output = '家人' ;	
				break;
			case 44:
				output = '豐' ;
				break;
			case 45:
				output = '離' ;
				break;
			case 46:
				output = '革' ;
				break;
			case 47:
				output = '同人' ;
				break;
			case 48:
				output = '臨' ;
				break;
			case 49:
				output = '損' ;
				break;
			case 50:
				output = '節' ;
				break;
			case 51:
				output = '中孚' ;
				break;
			case 52:
				output = '歸妹' ;
				break;
			case 53:
				output = '睽' ;
				break;
			case 54:
				output = '兌' ;
				break;
			case 55:
				output = '履' ;
				break;
			case 56:
				output = '泰' ;
				break;
			case 57:
				output = '大畜' ;
				break;
			case 58:
				output = '需' ;
				break;
			case 59:
				output = '小畜' ;
				break;
			case 60:
				output = '大壯' ;
				break;
			case 61:
				output = '大有' ;
				break;
			case 62:
				output = '夬' ;
				break;
			case 63:
				output = '乾' ;
				break;
		}
		return output;
	}
?>