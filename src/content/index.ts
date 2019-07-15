import { markdown } from 'markdown'
import './content.scss';
import content from './content.html';
import subject from './sub-content/page-subject.html';
import options from './sub-content/page-options.html';
import about from './sub-content/about.md';

const md = markdown.parse(about)[1][1];
console.log('md: ', md);

const contentPage = content
	.replace('{{page-subject}}', subject)
	.replace('{{page-options}}', options)
	.replace('{{about}}', md);

export default () => {
	const container = document.createElement('div');
	container.classList.add('content-container');
	container.innerHTML = contentPage;
	return container;
}