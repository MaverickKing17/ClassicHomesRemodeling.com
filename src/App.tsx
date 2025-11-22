import App from './App';
import SkipLink from '@/components/SkipLink';
import TawkToChat from '@/components/TawkToChat';

export default function Root() {
  return (
    <>
      <SkipLink />
      <App />
      <TawkToChat />
    </>
  );
}
