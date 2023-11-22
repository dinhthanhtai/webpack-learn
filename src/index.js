import _ from 'lodash';
// import printMe from './print';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    // element.onclick = printMe.bind(null, 'Hello webpack!')

    element.appendChild(btn)

    return element;
}

document.body.appendChild(component());