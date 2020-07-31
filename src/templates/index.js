import Onyx, { Image as OnyxPreview } from './onyx';
import Pikachu, { Image as PikachuPreview } from './pikachu';
import Gengar, { Image as GengarPreview } from './gengar';
import Castform, { Image as CastformPreview } from './castform';
import Glalie, { Image as GlaliePreview } from './glalie';
import Celebi, { Image as CelebiPreview } from './celebi';
import Classic, { Image as ClassicPreview } from './classic';
import NumberGame, { Image as NumberGamePreview } from './numberGame';

export default [
  {
    key: 'onyx',
    name: 'Industrious',
    component: Onyx,
    preview: OnyxPreview,
  },
  {
    key: 'pikachu',
    name: 'Pikachu',
    component: Pikachu,
    preview: PikachuPreview,
  },
  {
    key: 'classic',
    name: 'Modern Classic',
    component: Classic,
    preview: ClassicPreview,
  },
  {
    key: 'numbergame',
    name: 'Number Game',
    component: NumberGame,
    preview: NumberGamePreview,
  },
  {
    key: 'gengar',
    name: 'Gengar',
    component: Gengar,
    preview: GengarPreview,
  },
  {
    key: 'castform',
    name: 'Castform',
    component: Castform,
    preview: CastformPreview,
  },
  {
    key: 'glalie',
    name: 'Glalie',
    component: Glalie,
    preview: GlaliePreview,
  },
  {
    key: 'celebi',
    name: 'Celebi',
    component: Celebi,
    preview: CelebiPreview,
  },
];
