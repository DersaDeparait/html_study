export class FromHtml{
    constructor(document){
        this.document = document;
        
        this.button_start = document.getElementById("button_start");
        this.button_stop = document.getElementById("button_stop");
        this.button_time_setting = document.getElementById("button_time_setting");


        this.cell_start_time_text = document.getElementById("cell_start_time_text");
        this.cell_start_time_val = document.getElementById("cell_start_time_val");
        this.cell_common_speed_text = document.getElementById("cell_common_speed_text");
        this.cell_common_speed_val = document.getElementById("cell_common_speed_val");
        this.cell_common_speed_for_time_text = document.getElementById("cell_common_speed_for_time_text");
        this.cell_common_speed_for_time_val = document.getElementById("cell_common_speed_for_time_val");
        this.cell_errors_absolute_text = document.getElementById("cell_errors_absolute_text");
        this.cell_errors_absolute_val = document.getElementById("cell_errors_absolute_val");
        this.cell_errors_text = document.getElementById("cell_errors_text");
        this.cell_errors_val = document.getElementById("cell_errors_val");
        this.cell_frequency_text = document.getElementById("cell_frequency_text");
        this.cell_frequency_val = document.getElementById("cell_frequency_val");
        this.cell_inputed_press_text = document.getElementById("cell_inputed_press_text");
        this.cell_inputed_press_val = document.getElementById("cell_inputed_press_val");
        this.cell_inputed_up_text = document.getElementById("cell_inputed_up_text");
        this.cell_inputed_up_val = document.getElementById("cell_inputed_up_val");

        this.cell_time_text = document.getElementById("cell_time_text"); 
        this.cell_time_val = document.getElementById("cell_time_val"); 
        this.cell_right_speed_text = document.getElementById("cell_right_speed_text"); 
        this.cell_right_speed_val = document.getElementById("cell_right_speed_val"); 
        this.cell_right_speed_for_time_text = document.getElementById("cell_right_speed_for_time_text"); 
        this.cell_right_speed_for_time_val = document.getElementById("cell_right_speed_for_time_val"); 
        this.cell_right_absolute_text = document.getElementById("cell_right_absolute_text"); 
        this.cell_right_absolute_val = document.getElementById("cell_right_absolute_val"); 
        this.cell_right_text = document.getElementById("cell_right_text"); 
        this.cell_right_val = document.getElementById("cell_right_val"); 
        this.cell_inputed_symbols_text = document.getElementById("cell_inputed_symbols_text"); 
        this.cell_inputed_symbols_val = document.getElementById("cell_inputed_symbols_val"); 
        this.cell_scores_text = document.getElementById("cell_scores_text"); 
        this.cell_scores_val = document.getElementById("cell_scores_val"); 
        this.cell_need_to_input_text = document.getElementById("cell_need_to_input_text"); 
        this.cell_need_to_input_val = document.getElementById("cell_need_to_input_val"); 


        this.cell_name_number = document.getElementById("cell_name_number"); 
        this.cell_name_symbol = document.getElementById("cell_name_symbol"); 
        this.cell_name_time = document.getElementById("cell_name_time"); 
        this.cell_name_right = document.getElementById("cell_name_right"); 

        this.cell_6_number = document.getElementById("cell_6_number"); 
        this.cell_6_symbol = document.getElementById("cell_6_symbol"); 
        this.cell_6_time = document.getElementById("cell_6_time"); 
        this.cell_6_right = document.getElementById("cell_6_right"); 
        this.cell_5_number = document.getElementById("cell_5_number"); 
        this.cell_5_symbol = document.getElementById("cell_5_symbol"); 
        this.cell_5_time = document.getElementById("cell_5_time"); 
        this.cell_5_right = document.getElementById("cell_5_right"); 
        this.cell_4_number = document.getElementById("cell_4_number"); 
        this.cell_4_symbol = document.getElementById("cell_4_symbol"); 
        this.cell_4_time = document.getElementById("cell_4_time"); 
        this.cell_4_right = document.getElementById("cell_4_right"); 
        this.cell_3_number = document.getElementById("cell_3_number"); 
        this.cell_3_symbol = document.getElementById("cell_3_symbol"); 
        this.cell_3_time = document.getElementById("cell_3_time"); 
        this.cell_3_right = document.getElementById("cell_3_right"); 
        this.cell_2_number = document.getElementById("cell_2_number"); 
        this.cell_2_symbol = document.getElementById("cell_2_symbol"); 
        this.cell_2_time = document.getElementById("cell_2_time"); 
        this.cell_2_right = document.getElementById("cell_2_right"); 
        this.cell_1_number = document.getElementById("cell_1_number"); 
        this.cell_1_symbol = document.getElementById("cell_1_symbol"); 
        this.cell_1_time = document.getElementById("cell_1_time"); 
        this.cell_1_right = document.getElementById("cell_1_right"); 
        this.cell_0_number = document.getElementById("cell_0_number"); 
        this.cell_0_symbol = document.getElementById("cell_0_symbol"); 
        this.cell_0_time = document.getElementById("cell_0_time"); 
        this.cell_0_right = document.getElementById("cell_0_right"); 

        this.cell_all_number = [this.cell_0_number, this.cell_1_number, this.cell_2_number, this.cell_3_number, this.cell_4_number, this.cell_5_number, this.cell_6_number] 
        this.cell_all_symbol = [this.cell_0_symbol, this.cell_1_symbol, this.cell_2_symbol, this.cell_3_symbol, this.cell_4_symbol, this.cell_5_symbol, this.cell_6_symbol] 
        this.cell_all_time = [this.cell_0_time, this.cell_1_time, this.cell_2_time, this.cell_3_time, this.cell_4_time, this.cell_5_time, this.cell_6_time] 
        this.cell_all_right = [this.cell_0_right, this.cell_1_right, this.cell_2_right, this.cell_3_right, this.cell_4_right, this.cell_5_right, this.cell_6_right] 

        this.cell_tables_all = document.getElementById("tables");



        /*this.outbox_time_start_text = document.getElementById("outbox_time_start_text");
        this.outbox_time_after_start_text = document.getElementById("outbox_time_after_start_text");
        this.outbox_symbols_time_text = document.getElementById("outbox_symbols_time_text");
        this.outbox_symbols_text = document.getElementById("outbox_symbols_text");

        this.outbox_symbols_speed_text = document.getElementById("outbox_symbols_speed_text");
        this.outbox_symbols_speed_momental_text = document.getElementById("outbox_symbols_speed_momental_text");
        this.outbox_symbols_correct_text = document.getElementById("outbox_symbols_correct_text");
        this.outbox_symbols_error_text = document.getElementById("outbox_symbols_error_text");
        this.outbox_text_score = document.getElementById("outbox_text_score");
*/
        //this.outbox_input_box = document.getElementById("outbox_what_inputed");
        //this.outbox_output_box = document.getElementById("outbox_what_outputed");
        //this.outbox_symbol_to_input = document.getElementById("outbox_symbol_to_input");

        this.outbox_text_stamina = document.getElementById("outbox_text_stamina");
        this.outbox_text_stamina_old = document.getElementById("outbox_text_stamina_old");

        
    }

    show_result(butt, pushed_button=null, unpushed_button=null, need_to_push=null){
        this.cell_start_time_val.innerText = butt.get_start_time_formated();
        this.cell_common_speed_val.innerText = butt.get_all_speed_formated();
        this.cell_common_speed_for_time_val.innerText = butt.get_all_speed_last();
        this.cell_errors_absolute_val.innerText = butt.get_error_symbols_formated();
        this.cell_errors_val.innerText = butt.get_error_persent_formated();
        this.cell_frequency_val.innerText = butt;
        if (pushed_button != null)
            this.cell_inputed_press_val.innerText = pushed_button;
        if (unpushed_button != null)
            this.cell_inputed_up_val.innerText = unpushed_button;

        this.cell_time_val.innerText = butt.get_all_time_formated(); 
        this.cell_right_speed_val.innerText = butt.get_correct_speed_formated();
        this.cell_right_speed_for_time_val.innerText = butt.get_correct_speed_last_formated();
        this.cell_right_absolute_val.innerText = butt.get_correct_symbols_formated();
        this.cell_right_val.innerText = butt.get_correct_persent_formated();
        this.cell_inputed_symbols_val.innerText = butt.get_all_symbols_formated();
        this.cell_scores_val.innerText = butt.get_score_formated();
        if (need_to_push != null)
            if (need_to_push == ' ')
                this.cell_need_to_input_val.innerText = "[SPACE]";
            else
                this.cell_need_to_input_val.innerText = need_to_push;
        
        let number_of_last = butt.get_last_symbol_number_formated(0); // Рахуємо скільки всього введено щоб потім не йти в цикл більше за це значення
        for (let i=0; i < this.cell_all_number.length && i < number_of_last; i++){
            this.cell_all_number[i].innerText = butt.get_last_symbol_number_formated(i);
            if (butt.get_last_symbol_symbol_formated(i)==' ')
                this.cell_all_symbol[i].innerText = "[SPACE]";
            else
                this.cell_all_symbol[i].innerText = butt.get_last_symbol_symbol_formated(i);
            this.cell_all_time[i].innerText = butt.get_last_symbol_time_formated(i);
            this.cell_all_right[i].innerText = butt.get_last_symbol_correctness_formated(i);
        }
    }
    show_buttons(is_work){
        if (is_work == 0){
            this.button_start.style.visibility = 'visible';  
            this.button_stop.style.visibility = 'hidden';  
            this.button_time_setting.style.visibility = 'visible';  
        } else if (is_work == 1){
            this.button_start.style.visibility = 'hidden';  
            this.button_stop.style.visibility = 'visible';  
            this.button_time_setting.style.visibility = 'hidden';  
        } else if (is_work == 2){
            this.button_start.style.visibility = 'hidden';  
            this.button_stop.style.visibility = 'hidden';  
            this.button_time_setting.style.visibility = 'hidden';  
        }
    }

    set_text(text_to_write, written_text){
        this.outbox_text_stamina.innerText = text_to_write + "";
        this.outbox_text_stamina_old.innerText = written_text + "";
    }
    show_all_tables(){
        this.cell_tables_all.style.visibility = 'visible';
        //cell_tables_all.style.display = 'flex';
    }
}