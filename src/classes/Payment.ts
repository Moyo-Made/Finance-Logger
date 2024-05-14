import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
	constructor(
		readonly recipient: string,
		private detail: string,
		public amount: number
	) {}

	format() {
		return `${this.recipient} is owed $${this.amount} for ${this.detail}`;
	}
}
