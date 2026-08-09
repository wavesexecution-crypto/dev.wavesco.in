import type { ConceptKey } from "@/lib/projects";
import { CommerceConcept } from "./commerce";
import { SaaSConcept } from "./saas";
import { RestaurantConcept } from "./restaurant";
import { WebAppConcept } from "./webapp";
import { FitnessConcept } from "./fitness";
import { CafeConcept } from "./cafe";

export type ConceptProps = { preview?: boolean };

const components: Record<ConceptKey, React.ComponentType<ConceptProps>> = {
  commerce: CommerceConcept,
  saas: SaaSConcept,
  restaurant: RestaurantConcept,
  webapp: WebAppConcept,
  fitness: FitnessConcept,
  cafe: CafeConcept,
};

export function Concept({
  concept,
  preview = false,
}: {
  concept: ConceptKey;
  preview?: boolean;
}) {
  const Component = components[concept];
  return <Component preview={preview} />;
}
