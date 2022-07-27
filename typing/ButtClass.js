class Symbol{
  constructor(symbol, time, correctness){
    this.symbol = symbol;
    this.time = time;
    this.correctness = correctness;
  }
  static empty_symbol(){
    return Symbol(">???<", -1, false)
  }
}

export class Butt{
  constructor() {
    this.reset();
  }
  reset(){
    this.is_work = true;

    this.start_time = new Date();
    this.current_start_time = new Date();
    this.old_part_time = 0;
    this.current_part_time = 0;
    this.all_time = 0;

    this.symbol = [] 
    
    this.all_symbols = 0;
    this.error_symbols = 0;
    this.correct_symbols = 0;

    this.score = 0;
  }
  add_symbol(symbol, correct) {
    this.symbol.push(new Symbol(symbol, this.get_all_time(), correct));
    this.all_symbols = this.all_symbols + 1;
    if (correct) this.correct_symbols = this.correct_symbols + 1;
    else this.error_symbols = this.error_symbols + 1;
  }
  stop(){
    this.is_work = false;
    this.old_part_time = this.old_part_time + this.current_part_time;
  }
  resume(){
    this.is_work = true;
    this.current_start_time = new Date();
    this.current_part_time = 0;
  }


  get_is_work() { return this.is_work; }
  get_start_time() { return this.start_time; }
  get_current_start_time() { return this.current_start_time; }
  get_old_part_time() { return this.old_part_time; }
  get_current_part_time() { this.current_part_time = new Date() - this.current_start_time; return this.current_part_time; }
  get_all_time() { 
    this.all_time = this.get_old_part_time() + this.get_current_part_time(); 
    return this.all_time; 
  }

  get_symbol() { return this.symbol; }
  get_symbols() { return this.symbol.map(item => {return item.symbol}) }
  get_times() { return this.symbol.map(item => {return item.time}); }
  get_correctness() { return this.symbol.map(item => {return item.correctness}); }
  get_all_symbols() { return this.all_symbols; }
  get_error_symbols() { return this.error_symbols; }
  get_correct_symbols() { return this.correct_symbols; }
  get_score() {return this.score; }

  get_last_symbol(number=0){
    if (number < this.symbol.length)
      return this.symbol[this.symbol.length - number - 1];
    else
      return Symbol.empty_symbol();
  }
  get_last_symbol_number(number=0){
    return this.symbol.length - number
  }
  get_last_symbol_symbol(number=0){
    return this.get_last_symbol(number=number).symbol
  }
  get_last_symbol_time(number=0){
    return this.get_last_symbol(number=number).time 
  }
  get_last_symbol_correctness(number=0){
    return this.get_last_symbol(number=number).correctness
  }

  get_error_persent() { return 100 * this.error_symbols / this.all_symbols; }
  get_correct_persent() { return 100 * this.correct_symbols / this.all_symbols; }
  get_all_speed() { return 1000 * 60 * this.all_symbols / this.get_all_time(); }
  get_error_speed() { return 1000 * 60 * this.error_symbols / this.get_all_time(); }
  get_correct_speed() { return 1000 * 60 * this.correct_symbols / this.get_all_time(); }

  get_all_symbols_last(seconds=15) { return }
  get_error_symbols_last(seconds=15) { return }
  get_correct_symbols_last(seconds=15) { return }

  get_error_persent_last(seconds=15) { return }
  get_correct_persent_last(seconds=15) { return }
  
  get_all_speed_last(seconds=15) { 
    let cor = 0;
    let this_moment = this.get_all_time();
    for (let i = this.symbol.length - 1; i > -1; i--) {
      if (this_moment - seconds * 1000 < this.symbol[i].time) {
        cor++;
      } else {
        break;
      }    
    }
    return (cor * 60.0) / seconds; 
  }
  get_error_speed_last(seconds=15) { 
    let cor = 0;
    let this_moment = this.get_all_time();
    for (let i = this.symbol.length - 1; i > -1; i--) {
      if (this_moment - seconds * 1000 < this.symbol[i].time) {
        if (!this.symbol[i].correctness) {
          cor++;
        }
      } else {
        break;
      }    
    }
    return (cor * 60.0) / seconds;
  }
  get_correct_speed_last(seconds=15) { 
    let cor = 0;
    let this_moment = this.get_all_time();
    for (let i = this.symbol.length - 1; i > -1; i--) {
      if (this_moment - seconds * 1000 < this.symbol[i].time) {
        if (this.symbol[i].correctness) {
          cor++;
        }
      } else {
        break;
      }    
    }
    return (cor * 60.0) / seconds; 
  }
  
  

  get_start_time_formated() { 
    var options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    };
    var dateTime = new Intl.DateTimeFormat("ru", options).format;
    return dateTime(this.get_start_time());
  }
  get_current_start_time_formated() { return this.get_current_start_time() }
  get_old_part_time_formated() { return this.get_old_part_time() }
  get_current_part_time_formated() { return this.get_current_part_time() }
  get_all_time_formated() { 
    let all_time = parseInt(this.get_all_time() / 1000);
    let second = all_time % 60;
    let minute = parseInt(all_time / 60);
    return `${minute}:${second > 9 ? second : "0" + second}`;
  }

  get_symbols_formated() { return this.get_symbols() }
  get_times_formated() { return this.get_times() }
  get_correctness_formated() { return this.get_correctness() }
  get_all_symbols_formated() { return this.get_all_symbols() }
  get_error_symbols_formated() { return this.get_error_symbols() }
  get_correct_symbols_formated() { return this.get_correct_symbols() }
  get_score_formated() { return this.get_score(); }

  
  get_last_symbol_number_formated(number=0){
    return this.get_last_symbol_number(number=number);
  }
  get_last_symbol_symbol_formated(number=0){
    return this.get_last_symbol_symbol(number=number);
  }
  get_last_symbol_time_formated(number=0){
    let all_time = parseInt(this.get_last_symbol_time(number=number) / 1000);
    let milisec = this.get_last_symbol_time(number=number) % 1000;
    let second = all_time % 60;
    let minute = parseInt(all_time / 60);
    return `${minute}:${second > 9 ? second : "0" + second}.${milisec}`;
  }
  get_last_symbol_correctness_formated(number=0){
    return this.get_last_symbol_correctness(number=number);
  }

  get_error_persent_formated() { return parseInt(this.get_error_persent() * 100) / 100 + " %" }
  get_correct_persent_formated() { return parseInt(this.get_correct_persent() * 100) / 100 + " %"  }
  get_all_speed_formated() { return parseInt(this.get_all_speed()); }
  get_error_speed_formated() { return parseInt(this.get_error_speed()); }
  get_correct_speed_formated() { return parseInt(this.get_correct_speed()); }
  
  get_all_symbols_last_formated(seconds=15) { return this.get_all_symbols(seconds=seconds); }
  get_error_symbols_last_formated(seconds=15) { return this.get_error_symbols(seconds=seconds); }
  get_correct_symbols_last_formated(seconds=15) { return this.get_correct_symbols(seconds=seconds); }
  get_error_persent_last_formated(seconds=15) { return this.get_error_persent(seconds=seconds); }
  get_correct_persent_last_formated(seconds=15) { return this.get_correct_persent(seconds=seconds); }
  get_all_speed_last_formated(seconds=15) { return this.get_all_speed_last(seconds=seconds); }
  get_error_speed_last_formated(seconds=15) { return this.get_error_speed_last(seconds=seconds); }
  get_correct_speed_last_formated(seconds=15) { return this.get_correct_speed_last(seconds=seconds); }
  
}

