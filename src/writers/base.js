export default class BaseWriter {
    reload(scale, clef) {
        this.scale = scale;
        this.clef = clef;
        return this; // return the instance of the class, enables chaining

    }

    render(target) {
        throw new Error('Not Implemented');
    }
}
