import {Butt} from "./ButtClass.js";
import {Sentence} from "./SentenceClass.js";

export class Logic{
    constructor(document, fromHtml){
        this.document = document; // Відповідає з роботу з документом взагалі
        this.fromHtml = fromHtml; // відповідає за роботу з Html
        this.butt = null; // Загальні відомості про друк
        this.timerId = null; // Відповідає за обновлення загальне
        this.is_work = 0; // 0-стоп, 1-паше, 2-пауза

        this.pushed_button=null; 
        this.unpushed_button=null; 
        this.need_to_push=null;

        this.text_to_write = this.generate_text();
        this.need_to_push = this.text_to_write[0];
        this.written_text = "";

        this.set_text();
        
        this.document.addEventListener("keydown", this.bind(this, this.type_text_keydown), false);
        this.document.addEventListener("keyup", this.bind(this, this.type_text_keyup), false);
        fromHtml.button_start.onclick = this.bind(this, this.action_button_start);
        fromHtml.button_stop.onclick = this.bind(this, this.action_button_stop);
        //fromHtml.button_time_setting.addEventListener('click', this.bind(this, f));
        

    }
    generate_text(){
        return "Soda eamon Zaimon. Alpha beto Gamma. Zero go To twen, life. Dice with me. Go along to muchacha. Let it be. Who Will by?";
    }
    set_text(){this.fromHtml.set_text(this.text_to_write, this.written_text);}

    bind(scope, fn) { 
        return function() {
           return fn.apply(scope, arguments);
        }
    }

    time_worker() { this.update_metrics(); }
    add_timer(){ this.timerId = setInterval(this.bind(this, this.time_worker), 99); }
    del_timer(){ clearTimeout(this.timerId); }
    
    action_button_start() {this.change_work_type(1); this.butt = new Butt(); this.add_timer(); this.fromHtml.show_all_tables();}
    action_button_stop() {this.change_work_type(0); this.butt.stop()}
    change_work_type(new_type){
        this.is_work = new_type;
        this.fromHtml.show_buttons(this.is_work);
    }

    type_text_keydown(event) {
        let name = event.key;
        let code = event.code;
        this.pushed_button = name;
        
        // outbox_input_box.innerText = name + "     >> (" + code + ")";

        if ((event.key != "Shift") & (event.key != "CapsLock")) {
            this.change_work_type(1);
            if (this.butt == null) {
                this.butt = new Butt();
                //outbox_time_start_text.innerText = butt.get_start_time_regular_vision();
                this.add_timer();
                this.fromHtml.show_all_tables();
            }
            this.input_one_letter(event.key)
            this.update_metrics();
        }
        else
            this.update_metrics();
    }
    input_one_letter(event_key){
        this.butt.add_symbol(event_key, this.text_to_write[0] == event_key);
        if (this.text_to_write[0] == event_key) {

            let inputed_key = this.text_to_write[0];
            this.text_to_write = this.text_to_write.slice(1);
            
            this.add_text();
            
            this.written_text = this.written_text + inputed_key;
            //written_text = this.del_text(written_text);
            this.set_text();
            this.need_to_push = this.text_to_write[0];
        }
    }
    update_metrics(){ this.fromHtml.show_result(this.butt, this.pushed_button, this.unpushed_button, this.need_to_push); }

    type_text_keyup(event) {
        let name = event.key;
        let code = event.code;
        this.unpushed_button = name;
        this.update_metrics();
    }

    add_text() {
        if (this.text_to_write.length > 500) 
            return;
        this.text_to_write = this.text_to_write + this.create_sentence();
    }
    create_sentence() { return " " + "AAAAAAAAAAAAAAAAAAAAAAA" + "."; }
    del_text(text) { return text; }
}