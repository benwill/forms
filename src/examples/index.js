import BasicForm from "./BasicForm";
import BasicValidation from "./BasicValidation";
import BetterHooks from "./BetterHooks";
import Wizard from "./Wizard";

export default [
  { url: "basic-form", name: "basic", component: BasicForm },
  { url: "basic-validation", name: "validation", component: BasicValidation },
  { url: "better-hooks", name: "better hooks", component: BetterHooks },
  { url: "wizard", name: "wizard with mini reducers", component: Wizard },
];
