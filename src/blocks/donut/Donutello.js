const Donut = function(container) {
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    this.svg.setAttribute('viewBox', '0 0 42 42');
    this.svg.setAttribute('width', '100%');
    this.svg.setAttribute('height', '100%');

    let data = JSON.parse(container.dataset.donut);

    let total = 0;
    data.forEach(element => {
        total += element.value;
    });

    let str = document.createElement('div');
    str.classList.add('donut__text');
    str.innerHTML = `<h1>${total}</h1> голосов`;
    container.appendChild(str);

    this.draw = function() {
        container.appendChild(this.svg);

        let offset = 25;
        const radius = 15.91549430918952;
        const center = 21;

        let dashes = [];
        data.forEach(element => {
            let value = element.value / total * 100;
            let width = element.bold ? 4 : 1.2;
            
            let segment = this.createSegment(center, center, radius, `${value} ${100 - value}`, offset, element.color, width);
            this.svg.appendChild(segment);

            dashes.push(offset);

            offset -= value;
        });

        dashes.forEach(element => {
            let segment = this.createSegment(center, center, radius, '.8 99.2', element + .4 , '#fff', 5);
            this.svg.appendChild(segment);
        });

        this.svg.appendChild(
            this.createSegment(center, center, 18.8, '', '', '#fff', 4)
        );
    }

    this.createSegment = function(x, y, r, dashes, offset, color, width) {
        let segment = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

        segment.setAttribute('cx', x);
        segment.setAttribute('cy', y);
        segment.setAttribute('r', r);
        segment.setAttribute('stroke', color);
        segment.setAttribute('fill', 'transparent');
        segment.setAttribute('stroke-dasharray', dashes);
        segment.setAttribute('stroke-dashoffset', offset);
        segment.setAttribute('stroke-width', width);

        return segment;
    }
}

export { Donut };