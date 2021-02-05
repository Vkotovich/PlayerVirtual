import React, { Fragment } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import './Intro.css';

const Intro = ({ id, go, route, fetchedUser, userHasSeenIntro }) => (
	<Panel id={id} centered={true}>
		<PanelHeader>Разработка</PanelHeader>
		{(fetchedUser && !userHasSeenIntro) &&
			<Fragment>
				<Group>
					<Div className='User'>
						{fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
						<h3>{fetchedUser.first_name}, игра находит на стадии разработки!    Всю информацию можно найти у нас в группе!</h3>

					</Div>
				</Group>
				<FixedLayout vertical='bottom'>
					<Div>
						<Button mode='commerce' size="xl" level="2" onClick={() => go(route)}>
							Хорошо!
						</Button>
					</Div>
				</FixedLayout>
			</Fragment>
		}
	</Panel>
);
export default Intro;
