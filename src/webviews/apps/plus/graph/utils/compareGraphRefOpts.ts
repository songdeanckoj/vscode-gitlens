import type { GraphRefOptData } from '@gitkraken/gitkraken-components';
import { refTypes } from '@gitkraken/gitkraken-components';

export function compareGraphRefOpts(a: GraphRefOptData, b: GraphRefOptData): number {
	const comparationResult = a.name.localeCompare(b.name);
	if (comparationResult === 0) {
		// If names are equals
		if (a.type === refTypes.REMOTE) {
			return -1;
		}
	}
	return comparationResult;
}
