import { useTransitionContext } from '@/contexts/TransitionContext';
import styles from '@/styles/Transition.module.scss'; // Adjust path as necessary

type Props = {
    children?: React.ReactNode
};

const TransitionContainer: React.FC<Props> = ({ children }) => {
    const { inTransition } = useTransitionContext();

    return (
        <div className={`${styles.transitionContainer} ${inTransition ? styles.inTransition : ''}`}>
            {children}
        </div>
    );
};

export default TransitionContainer;
