import {Butt} from "./ButtClass.js";

var cell_start_time_text = document.getElementById("cell_start_time_text");
var cell_start_time_val = document.getElementById("cell_start_time_val");
var cell_common_speed_text = document.getElementById("cell_common_speed_text");
var cell_common_speed_val = document.getElementById("cell_common_speed_val");
var cell_common_speed_for_time_text = document.getElementById("cell_common_speed_for_time_text");
var cell_common_speed_for_time_val = document.getElementById("cell_common_speed_for_time_val");
var cell_errors_absolute_text = document.getElementById("cell_errors_absolute_text");
var cell_errors_absolute_val = document.getElementById("cell_errors_absolute_val");
var cell_errors_text = document.getElementById("cell_errors_text");
var cell_errors_val = document.getElementById("cell_errors_val");
var cell_frequency_text = document.getElementById("cell_frequency_text");
var cell_frequency_val = document.getElementById("cell_frequency_val");
var cell_inputed_press_text = document.getElementById("cell_inputed_press_text");
var cell_inputed_press_val = document.getElementById("cell_inputed_press_val");
var cell_inputed_up_text = document.getElementById("cell_inputed_up_text");
var cell_inputed_up_val = document.getElementById("cell_inputed_up_val");

var cell_time_text = document.getElementById("cell_time_text"); 
var cell_time_val = document.getElementById("cell_time_val"); 
var cell_right_speed_text = document.getElementById("cell_right_speed_text"); 
var cell_right_speed_val = document.getElementById("cell_right_speed_val"); 
var cell_right_speed_for_time_text = document.getElementById("cell_right_speed_for_time_text"); 
var cell_right_speed_for_time_val = document.getElementById("cell_right_speed_for_time_val"); 
var cell_right_absolute_text = document.getElementById("cell_right_absolute_text"); 
var cell_right_absolute_val = document.getElementById("cell_right_absolute_val"); 
var cell_right_text = document.getElementById("cell_right_text"); 
var cell_right_val = document.getElementById("cell_right_val"); 
var cell_inputed_symbols_text = document.getElementById("cell_inputed_symbols_text"); 
var cell_inputed_symbols_val = document.getElementById("cell_inputed_symbols_val"); 
var cell_scores_text = document.getElementById("cell_scores_text"); 
var cell_scores_val = document.getElementById("cell_scores_val"); 
var cell_need_to_input_text = document.getElementById("cell_need_to_input_text"); 
var cell_need_to_input_val = document.getElementById("cell_need_to_input_val"); 

var cell_name_number = document.getElementById("cell_name_number"); 
var cell_name_symbol = document.getElementById("cell_name_symbol"); 
var cell_name_time = document.getElementById("cell_name_time"); 
var cell_name_right = document.getElementById("cell_name_right"); 
var cell_6_number = document.getElementById("cell_6_number"); 
var cell_6_symbol = document.getElementById("cell_6_symbol"); 
var cell_6_time = document.getElementById("cell_6_time"); 
var cell_6_right = document.getElementById("cell_6_right"); 
var cell_5_number = document.getElementById("cell_5_number"); 
var cell_5_symbol = document.getElementById("cell_5_symbol"); 
var cell_5_time = document.getElementById("cell_5_time"); 
var cell_5_right = document.getElementById("cell_5_right"); 
var cell_4_number = document.getElementById("cell_4_number"); 
var cell_4_symbol = document.getElementById("cell_4_symbol"); 
var cell_4_time = document.getElementById("cell_4_time"); 
var cell_4_right = document.getElementById("cell_4_right"); 
var cell_3_number = document.getElementById("cell_3_number"); 
var cell_3_symbol = document.getElementById("cell_3_symbol"); 
var cell_3_time = document.getElementById("cell_3_time"); 
var cell_3_right = document.getElementById("cell_3_right"); 
var cell_2_number = document.getElementById("cell_2_number"); 
var cell_2_symbol = document.getElementById("cell_2_symbol"); 
var cell_2_time = document.getElementById("cell_2_time"); 
var cell_2_right = document.getElementById("cell_2_right"); 
var cell_1_number = document.getElementById("cell_1_number"); 
var cell_1_symbol = document.getElementById("cell_1_symbol"); 
var cell_1_time = document.getElementById("cell_1_time"); 
var cell_1_right = document.getElementById("cell_1_right"); 
var cell_0_number = document.getElementById("cell_0_number"); 
var cell_0_symbol = document.getElementById("cell_0_symbol"); 
var cell_0_time = document.getElementById("cell_0_time"); 
var cell_0_right = document.getElementById("cell_0_right"); 

var cell_tables_all = document.getElementById("tables");



var outbox_time_start_text = document.getElementById("outbox_time_start_text");
var outbox_time_after_start_text = document.getElementById("outbox_time_after_start_text");
var outbox_symbols_time_text = document.getElementById("outbox_symbols_time_text");
var outbox_symbols_text = document.getElementById("outbox_symbols_text");

var outbox_symbols_speed_text = document.getElementById("outbox_symbols_speed_text");
var outbox_symbols_speed_momental_text = document.getElementById("outbox_symbols_speed_momental_text");
var outbox_symbols_correct_text = document.getElementById("outbox_symbols_correct_text");
var outbox_symbols_error_text = document.getElementById("outbox_symbols_error_text");
var outbox_text_score = document.getElementById("outbox_text_score");

var outbox_input_box = document.getElementById("outbox_what_inputed");
var outbox_output_box = document.getElementById("outbox_what_outputed");
var outbox_symbol_to_input = document.getElementById("outbox_symbol_to_input");

var outbox_text_stamina = document.getElementById("outbox_text_stamina");
var outbox_text_stamina_old = document.getElementById("outbox_text_stamina_old");




var butt;

var timerId = null;

function time_worker() { 
  cell_start_time_val.innerText = butt.get_start_time_formated();
  cell_common_speed_val.innerText = butt.get_all_speed_formated();
  cell_common_speed_for_time_val.innerText = butt
  cell_errors_absolute_val.innerText = butt
  cell_errors_val.innerText = butt
  cell_frequency_val.innerText = butt
  cell_inputed_press_val.innerText = butt
  cell_inputed_up_val.innerText = butt

  cell_time_val.innerText = butt.get_all_time_formated(); 
  cell_right_speed_val.innerText = butt
  cell_right_speed_for_time_val.innerText = butt
  cell_right_absolute_val.innerText = butt
  cell_right_val.innerText = butt
  cell_inputed_symbols_val.innerText = butt
  cell_scores_val.innerText = butt
  cell_need_to_input_val.innerText = butt
  
  outbox_time_after_start_text.innerText = butt.get_time_after_start_formated();
  outbox_symbols_speed_text.innerText = butt.get_speed_formated();
  outbox_symbols_speed_momental_text.innerText = butt.get_speed_last_formated();
  outbox_symbols_error_text.innerText = butt.get_errors_formated();
  outbox_symbols_correct_text.innerText = butt.get_correct_formated(); 
}

function add_timer(){
  timerId = setInterval(time_worker, 99);
}
function del_timer(){
  clearTimeout(timerId);
}




var text_to_write = "Soda eamon Zaimon. Alpha beto Gamma. Zero go To twen, life. Dice with me. Go along to muchacha. Let it be. Who Will by?";
var written_text = "";
outbox_text_stamina.innerText = text_to_write;
outbox_text_stamina_old.innerText = written_text;

document.addEventListener("keydown", type_text_keydown, false);
document.addEventListener("keyup", type_text_keyup, false);

function type_text_keydown(event) {
  var name = event.key;
  var code = event.code;
  outbox_input_box.innerText = name + "     >> (" + code + ")";

  if ((event.key != "Shift") & (event.key != "CapsLock")) {
    if (butt == null) {
      butt = new Butt();
      outbox_time_start_text.innerText = butt.get_start_time_regular_vision();
      add_timer();
      //cell_tables_all.style.display = 'flex';
      cell_tables_all.style.visibility = 'visible';
    }

    butt.add_symbol(event.key, text_to_write[0] == event.key);
    if (text_to_write[0] == event.key) {
      let inputed_key = text_to_write[0];
      text_to_write = text_to_write.slice(1);
      text_to_write = add_text(text_to_write);
      outbox_text_stamina.innerText = text_to_write;

      written_text = written_text + inputed_key;
      written_text = del_text(written_text);
      outbox_text_stamina_old.innerHTML = written_text;
    }
    outbox_symbols_time_text.innerText = butt.get_symbols();
    outbox_symbols_text.innerText = butt.get_times();

    outbox_symbol_to_input.innerText = outbox_text_stamina.innerText[0];
    outbox_text_score.innerText = butt.get_score();
  }
}

function type_text_keyup(event) {
  var name = event.key;
  var code = event.code;
  outbox_output_box.innerText = name + "    >> (" + code + ")";
}

function add_text(current_text) {
  if (current_text.length > 50) return current_text;
  text = current_text + create_sentence();
  return text;
}
function del_text(text) { return text; }
function create_sentence() { return " " + "Dog cat like sota, one line to my connan warwar" + "."; }

function fun1() { alert("Выбран"); }

function fun2(e) {
  var x = e.clientX;
  var y = e.clientY;
  document.getElementById("tooltip").style.left = x + "px";
  document.getElementById("tooltip").style.top = y + "px";
}

function testFunction() {}