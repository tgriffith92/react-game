const MoveFinger = (entities, {input}) => {

    const { payload } = input.find(x => x.name === "onMouseDown");

    if(payload) {
        const finger = entities["finger1"];

        finger.position[0] = payload.pageX;
        finger.position[1] = payload.pageY;
    }

    return entities
}

export { MoveFinger }