import styles from './Button.module.css';
import {ButtonProps} from "./Button.props";
// @ts-ignore
import cn from 'classnames';
import { spawn } from 'child_process';


export const Button = ({appearance, arrow='none', children, className, ...props}:ButtonProps):JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow != 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down'
			})}>
				<img src="/arrow.svg" alt="alt"/>
			</span> }
		</button>
	);

};