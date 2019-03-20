import AsyncSelectControl from './Control';
import AsyncSelectPreview from './Preview';

if (typeof window !== 'undefined') {
  window.AsyncSelectControl = AsyncSelectControl;
  window.AsyncSelectPreview = AsyncSelectPreview;
}

export { AsyncSelectControl, AsyncSelectPreview };
