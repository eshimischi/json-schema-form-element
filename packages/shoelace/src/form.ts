import { Jsf } from '@jsfe/form';
import * as widgets from './widgets/index.js';
import { styles } from './styles.js';

export class JsfShoelace extends Jsf {
	public widgets = widgets;

	public styleSheets = [styles];
}
