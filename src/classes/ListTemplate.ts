import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
	constructor(private container: HTMLUListElement){}

	render(item: HasFormatter, heading: string, position: "start" | "end"){
		const li = document.createElement("li")
		
		const h4 = document.createElement("h4");
		h4.innerText = heading;
		li.append(h4);		

		const p = document.createElement("p");
        p.innerText = item.format(); //invoice or payment
        li.append(p);

		if(position === "start"){
            this.container.prepend(li); //prepend- to put it at the start position
        }else{
            this.container.append(li);
        }
	}
}