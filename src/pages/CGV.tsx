import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CGV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-10">
          Conditions générales et mentions légales
        </h1>

        <div className="prose-custom space-y-10 text-muted-foreground text-[15px] leading-relaxed">
          <section>
            <h2>1. Éditeur du site</h2>
            <p>
              Bourban Digital, entreprise individuelle<br />
              Hippolyte Bourban<br />
              Chemin du Tsâblo 55<br />
              1997 Haute-Nendaz<br />
              Suisse
            </p>
            <p>E-mail : info@flashads.ch</p>
            <p>Téléphone : +41 27 552 05 07</p>
            <p>
              Le présent site internet et les services Flash Ads sont exploités par Bourban Digital, entreprise individuelle, dont le titulaire est Hippolyte Bourban.
            </p>
          </section>

          <section>
            <h2>2. Objet</h2>
            <p>
              Les présentes conditions générales régissent l'accès au site internet Flash Ads ainsi que les prestations proposées par Bourban Digital, notamment les services d'accompagnement, de gestion, d'optimisation et de suivi de campagnes Google Ads, ainsi que les services associés de conseil en publicité digitale.
            </p>
            <p>
              En utilisant le site ou en souscrivant à une offre Flash Ads, le client accepte les présentes conditions générales.
            </p>
          </section>

          <section>
            <h2>3. Prestations proposées</h2>
            <p>Flash Ads propose notamment les prestations suivantes :</p>
            <ul>
              <li>audit et analyse de campagnes publicitaires</li>
              <li>création, configuration et lancement de campagnes Google Ads</li>
              <li>gestion mensuelle et optimisation continue des campagnes</li>
              <li>mise en place du suivi des conversions</li>
              <li>reporting mensuel</li>
              <li>accompagnement stratégique lié aux campagnes publicitaires</li>
              <li>options ou prestations complémentaires selon l'offre souscrite</li>
            </ul>
            <p>
              Le détail exact des prestations incluses dépend de l'offre, du devis, de l'abonnement ou de la proposition commerciale acceptée par le client.
            </p>
          </section>

          <section>
            <h2>4. Conclusion du contrat</h2>
            <p>Le contrat entre Bourban Digital et le client est réputé conclu dès l'un des événements suivants :</p>
            <ul>
              <li>acceptation écrite d'un devis ou d'une offre</li>
              <li>validation d'une commande en ligne</li>
              <li>souscription à un abonnement</li>
              <li>paiement d'une facture ou du premier abonnement</li>
              <li>confirmation expresse par e-mail ou par tout autre moyen écrit</li>
            </ul>
            <p>
              Bourban Digital se réserve le droit de refuser une demande, une commande ou une souscription sans devoir motiver sa décision.
            </p>
          </section>

          <section>
            <h2>5. Abonnement mensuel et renouvellement automatique</h2>
            <p>
              Les services Flash Ads sont fournis sous forme d'abonnement mensuel, sauf accord contraire écrit.
            </p>
            <p>L'abonnement est reconduit automatiquement de mois en mois jusqu'à résiliation.</p>
            <p>
              Le client autorise Bourban Digital à prélever automatiquement les montants dus via le moyen de paiement enregistré, notamment via Stripe et les moyens de paiement proposés sur le site, y compris TWINT lorsque disponible.
            </p>
            <p>Le client est responsable de maintenir des informations de paiement valides et à jour.</p>
            <p>En cas d'échec de paiement, Bourban Digital peut :</p>
            <ul>
              <li>suspendre immédiatement les prestations</li>
              <li>interrompre la diffusion des campagnes</li>
              <li>refacturer les montants impayés</li>
              <li>demander le paiement par un autre moyen</li>
              <li>résilier la relation contractuelle avec effet immédiat en cas de non-paiement persistant</li>
            </ul>
          </section>

          <section>
            <h2>6. Résiliation</h2>
            <p>L'abonnement peut être résilié par le client avec un préavis d'un mois pour la fin d'un mois.</p>
            <p>La résiliation peut être effectuée directement par le client depuis son espace client lorsqu'une telle fonctionnalité est disponible.</p>
            <p>La résiliation peut également être demandée par écrit à l'adresse e-mail indiquée dans les présentes conditions.</p>
            <p>Toute période entamée reste due dans son intégralité et ne donne lieu à aucun remboursement, sauf accord exceptionnel exprès de Bourban Digital.</p>
            <p>Bourban Digital peut résilier ou suspendre les prestations avec effet immédiat en cas de :</p>
            <ul>
              <li>non-paiement</li>
              <li>utilisation abusive du service</li>
              <li>absence de collaboration du client</li>
              <li>comportement contraire à la loi, aux règles publicitaires ou aux politiques des plateformes utilisées</li>
              <li>fourniture d'informations inexactes ou trompeuses</li>
            </ul>
          </section>

          <section>
            <h2>7. Prix et facturation</h2>
            <p>Les prix sont indiqués en francs suisses (CHF), sauf mention contraire.</p>
            <p>Sauf indication contraire, les prix affichés ou communiqués ne comprennent que les prestations explicitement décrites dans l'offre ou le devis accepté.</p>
            <p>Les frais publicitaires facturés par des plateformes tierces ou intégrés dans certaines offres sont définis selon l'offre souscrite.</p>
            <p>Bourban Digital peut adapter ses prix à tout moment pour l'avenir. Toute modification de prix applicable à un abonnement en cours sera communiquée au client à l'avance.</p>
            <p>Les factures sont payables selon les modalités convenues et, à défaut, immédiatement à réception.</p>
          </section>

          <section>
            <h2>8. Obligations du client</h2>
            <p>Le client s'engage à :</p>
            <ul>
              <li>fournir des informations exactes, complètes et à jour</li>
              <li>collaborer de bonne foi</li>
              <li>transmettre dans des délais raisonnables les accès, éléments visuels, textes, informations commerciales et validations nécessaires</li>
              <li>respecter les lois applicables ainsi que les politiques de Google, Stripe, TWINT et des autres plateformes concernées</li>
              <li>disposer des droits nécessaires sur les contenus, visuels, logos, textes, marques et autres éléments fournis à Bourban Digital</li>
            </ul>
            <p>Le client demeure seul responsable des contenus, allégations, offres, prix, promotions, promesses commerciales, réservations, produits et services mis en avant dans ses campagnes.</p>
          </section>

          <section>
            <h2>9. Accès aux plateformes et comptes tiers</h2>
            <p>Pour exécuter ses prestations, Bourban Digital peut avoir besoin d'accéder à différents outils ou comptes tiers, notamment :</p>
            <ul>
              <li>Google Ads</li>
              <li>Google Analytics</li>
              <li>Google Tag Manager</li>
              <li>site internet du client</li>
              <li>CMS, hébergeur ou espace administrateur</li>
              <li>Stripe ou autres outils de paiement</li>
              <li>outils CRM ou de réservation</li>
            </ul>
            <p>Le client reste responsable de ses comptes et accès. Il doit s'assurer que les informations transmises sont correctes et que les accès fournis sont valides.</p>
            <p>Bourban Digital n'est pas responsable des interruptions, erreurs, limitations, refus ou blocages provenant de plateformes tierces.</p>
          </section>

          <section>
            <h2>10. Absence de garantie de résultat</h2>
            <p>Bourban Digital met en œuvre tous les moyens raisonnables pour optimiser les campagnes publicitaires, mais ne garantit aucun résultat minimum, aucun chiffre d'affaires, aucun volume de leads, aucune position, aucun retour sur investissement, ni aucun niveau de performance spécifique.</p>
            <p>Les performances d'une campagne dépendent de nombreux facteurs indépendants de Bourban Digital, notamment :</p>
            <ul>
              <li>le marché</li>
              <li>la concurrence</li>
              <li>la saisonnalité</li>
              <li>le budget</li>
              <li>la qualité du site internet</li>
              <li>l'offre du client</li>
              <li>le ciblage</li>
              <li>les enchères</li>
              <li>les politiques des plateformes</li>
              <li>le comportement des internautes</li>
            </ul>
            <p>Toute estimation ou projection de performance est indicative uniquement.</p>
          </section>

          <section>
            <h2>11. Délais, disponibilité et continuité du service</h2>
            <p>Bourban Digital s'efforce de fournir ses prestations dans des délais raisonnables. Les délais sont toutefois indicatifs sauf engagement écrit exprès.</p>
            <p>Bourban Digital ne garantit pas un fonctionnement ininterrompu du site ou des services.</p>
            <p>Le site et les prestations peuvent être modifiés, suspendus ou interrompus à tout moment, notamment pour maintenance, mise à jour, raisons techniques, raisons de sécurité ou cas de force majeure.</p>
          </section>

          <section>
            <h2>12. Responsabilité</h2>
            <p>Dans toute la mesure permise par le droit applicable, Bourban Digital exclut toute responsabilité pour les dommages directs ou indirects, consécutifs, immatériels ou économiques, notamment :</p>
            <ul>
              <li>perte de chiffre d'affaires</li>
              <li>perte de bénéfice</li>
              <li>perte de clients</li>
              <li>perte de données</li>
              <li>perte d'exploitation</li>
              <li>atteinte à la réputation</li>
              <li>coûts publicitaires non rentabilisés</li>
              <li>erreurs de diffusion</li>
              <li>refus ou suspension de campagnes par Google ou toute autre plateforme</li>
            </ul>
            <p>Bourban Digital n'assume aucune responsabilité pour :</p>
            <ul>
              <li>les erreurs ou omissions dans les contenus fournis par le client</li>
              <li>les décisions ou sanctions prises par Google, Stripe, TWINT ou toute autre plateforme tierce</li>
              <li>les dysfonctionnements techniques du site du client ou de plateformes tierces</li>
              <li>les erreurs de tracking, d'attribution ou de mesure liées à des outils tiers</li>
              <li>les indisponibilités du site, des serveurs, des API ou des comptes tiers</li>
              <li>les actes de piratage, cyberattaque, fraude ou accès non autorisé</li>
            </ul>
            <p>Si, malgré ce qui précède, la responsabilité de Bourban Digital devait être retenue, elle serait dans tous les cas limitée au montant effectivement payé par le client au cours du mois précédant le fait générateur du dommage.</p>
          </section>

          <section>
            <h2>13. Réclamations</h2>
            <p>Toute réclamation relative à une prestation doit être formulée par écrit dans un délai de 7 jours à compter du fait concerné ou de la réception du livrable concerné.</p>
            <p>À défaut, la prestation est réputée acceptée.</p>
            <p>Le dépôt d'une réclamation n'autorise pas le client à suspendre, compenser ou retarder un paiement.</p>
          </section>

          <section>
            <h2>14. Propriété intellectuelle</h2>
            <p>Sauf disposition contraire écrite, tous les contenus, textes, visuels, structures, méthodes, rapports, audits, présentations, créations, documents et supports produits par Bourban Digital demeurent sa propriété exclusive jusqu'au paiement complet des montants dus.</p>
            <p>Le client n'acquiert aucun droit de propriété intellectuelle sur les méthodes, processus, outils, modèles, documents ou supports utilisés par Bourban Digital, sauf accord écrit contraire.</p>
            <p>Les marques, logos, noms commerciaux et contenus présents sur le site demeurent protégés.</p>
          </section>

          <section>
            <h2>15. Données personnelles</h2>
            <p>Bourban Digital traite les données personnelles dans le respect du droit applicable, en particulier du droit suisse en matière de protection des données. La Suisse applique la nouvelle loi fédérale sur la protection des données depuis le 1er septembre 2023.</p>
            <p>Les données collectées peuvent notamment être utilisées pour :</p>
            <ul>
              <li>répondre aux demandes</li>
              <li>gérer les abonnements</li>
              <li>exécuter les prestations</li>
              <li>établir les factures</li>
              <li>assurer le support client</li>
              <li>améliorer les services</li>
              <li>respecter les obligations légales</li>
            </ul>
            <p>Le client accepte que certaines données puissent être transmises à des prestataires tiers lorsque cela est nécessaire à l'exécution des services, notamment Google, Stripe, outils analytiques, outils CRM, hébergeurs ou plateformes publicitaires.</p>
            <p>Une politique de confidentialité séparée peut compléter les présentes conditions.</p>
          </section>

          <section>
            <h2>16. Moyens de paiement</h2>
            <p>Les paiements peuvent être effectués via les moyens proposés par Bourban Digital, notamment Stripe et, lorsque disponible, TWINT.</p>
            <p>En choisissant un moyen de paiement tiers, le client accepte également les conditions de ce prestataire.</p>
            <p>Bourban Digital n'est pas responsable des erreurs, interruptions, refus ou limitations liés aux systèmes de paiement tiers.</p>
          </section>

          <section>
            <h2>17. Droit applicable et for juridique</h2>
            <p>Les présentes conditions générales sont régies par le droit suisse.</p>
            <p>Sous réserve de dispositions impératives contraires, le for exclusif est au siège de Bourban Digital, soit dans le canton du Valais, Suisse.</p>
          </section>

          <section>
            <h2>18. Nullité partielle</h2>
            <p>Si une disposition des présentes conditions devait être jugée invalide, illégale ou inapplicable, les autres dispositions resteraient valables et pleinement applicables.</p>
          </section>

          <section>
            <h2>19. Modification des conditions générales</h2>
            <p>Bourban Digital peut modifier les présentes conditions générales à tout moment.</p>
            <p>La version en vigueur est celle publiée sur le site au moment de l'utilisation du site ou de la souscription du service, sous réserve de dispositions plus favorables convenues par écrit.</p>
          </section>

          <section className="border-t border-border/30 pt-8 mt-12">
            <h2>Mentions légales</h2>
            <p>
              Bourban Digital, entreprise individuelle<br />
              Titulaire : Hippolyte Bourban<br />
              Adresse : Chemin du Tsâblo 55, 1997 Haute-Nendaz, Suisse<br />
              E-mail : info@flashads.ch<br />
              Téléphone : +41 27 552 05 07
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CGV;
