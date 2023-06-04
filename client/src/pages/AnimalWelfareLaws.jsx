import Paw from "../assets/ui/CARA_PICTURES/paw.jpg";
import CD from "../assets/ui/CARA_PICTURES/cat and dog.jpg";
import { Link } from "react-router-dom";

import React from "react";

function AnimalWelfareLaws() {
  return (
    <div className="bg-zinc-400 p-12">
      <img
        src={Paw}
        alt=""
        className="w-56 absolute right-1 bottom-[60%] opacity-[0.08] hover:opacity-80 "
      />
      <img
        src={CD}
        alt=""
        className="w-56 absolute left-1 bottom-[60%] opacity-[0.08] hover:opacity-80"
      />

      <div className="bg-primary m-6 p-6 pb-12 w-9/12 mx-auto rounded-xl relative">
        <h1 className="mx-20 mt-8 text-4xl font-bold">Animal Welfare Laws</h1>
        <p className="mx-20 mt-8 ">
          Read more about the laws that protect animals in the Philippines.
        </p>
        <ul className="mx-20 my-8 list-disc">
          <li>Republic Act 8485 | Download (Click to download a copy)</li>
          <li>Republic Act 10631 | Download (Click to download a copy)</li>
          <li>Republic Act 9482 | Download (Click to download a copy)</li>
        </ul>

        <h1 className="mx-20 my-8 text-3xl font-semibold text-center sm:text-center lg:text-left">
          Republic Act 8485
        </h1>
        <p className="mx-20 my-6">
          An Act to promote animal welfare in the Philippines, otherwise known
          as “The Animal Welfare Act of 1998”.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SECTION 1.</span> It is the
          purpose of this Act to protect and promote the welfare of all animals
          in the Philippines by supervising end regulating the establishment and
          operations of all facilities utilized for breeding, maintaining,
          keeping, treating or training of all animals either as objects of
          trade or as household pets. For purposes of this Act, pet animals
          shall include birds.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SECTION 2.</span> No person,
          association, partnership, corporation, cooperative or any government
          agency or instrumentality including slaughter houses shall establish,
          maintain and operate any pet shop, kennel, veterinary clinic,
          veterinary hospital, stockyard, corral, stud farm or zoo for the
          breeding, treatment, sale or trading, or training of animals without
          first securing from the Bureau of Animal Industry a certificate of
          registration therefore.
        </p>
        <p className="mx-20 my-6">
          The certificate shall be issued upon proof that the facilities of such
          establishment for animals are adequate, clean end sanitary and will
          not be used for nor cause pain and/or suffering to the animals. The
          certificate shall be valid for a period of one (I) year unless earlier
          cancelled for just cause before the expiration of its term by the
          Director of the Bureau of Animal Industry and may be renewed from6
          year to year upon compliance with the conditions imposed hereunder.
          The Bureau shall charge reasonable fees for the issuance or renewal of
          such certificate.
        </p>
        <p className="mx-20 my-6">
          The condition that such facilities be adequate, clean and sanitary,
          and that they will not be used for nor cause pain and/or suffering to
          the animals is a continuing requirement for the operation of these
          establishments. The Bureau may revoke or cancel such certificate of
          registration for failure to observe these conditions and other just
          cause.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SECTION 3.</span> The Director
          of the Bureau of Animal Industry shall supervise and regulate the
          establishment, operation and maintenance, of pet shops, kennels,
          veterinary clinics, veterinary hospitals, stockyards, corrals, stud
          farms and zoos and any other form or structure for the confinement of
          animals where they are bred, treated, maintained, or kept either for
          sale or trade or for training purposes as well as the transport of
          such animals in any form of public or private transportation facility,
          in order to provide maximum comfort while in transit and minimized, if
          not totally eradicate, incidence of sickness and death and prevent any
          cruelty from being inflicted upon the animals.
        </p>
        <p className="mx-20 my-6">
          The Director may call upon any Government agency for assistance
          consistent with its powers, duties and responsibilities for the
          purpose of ensuring the effective and efficient implementation of this
          Act and the rules and regulations promulgated thereunder.
        </p>
        <p className="mx-20 my-6">
          It shall be the duty of such government agency to assist said Director
          when called upon for assistance using any available fund in it budget
          for the purpose.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SECTION 4.</span> It shall be
          the duty of any owner or operator of any land, air or water public
          utility transporting pet, wildlife and all other animals to provide in
          all cases adequate, dean and sanitary facilities for sale conveyance
          and delivery thereof to their consignee at the place of consignment.
          They shall provide sufficient food and water for such animals while in
          transit for more than twelve (12) hours or whenever necessary
        </p>
        <p className="mx-20 my-6">
          No public utility shall transport any such animals without a written
          permit form the Director of the Bureau of Animal Industry or his/her
          authorized representative. No cruel confinement or restraint shall be
          made on such animals while being transported.
        </p>
        <p className="mx-20 my-6">
          Any form, of cruelty shall be penalized even if the transporter has
          obtained a permit from the Director of the Bureau of Animal Industry.
          Cruelty in transporting includes overcrowding, placing of animals in
          the trunks or under the hood trunks of vehicles.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SECTION 5.</span> There is
          hereby created a Committee on Animal Welfare attached to the
          Department of Agriculture which shall, subject to the approval of the
          Secretary of the Department of Agriculture, issue the necessary rules
          and regulation for the strict implementation of the provisions of this
          Act, including the setting of safety and sanitary standards, within
          thirty (30) calendar days following its approval. Such guidelines
          shall be reviewed by the Committee every three years from its
          implementation or whenever necessary.
        </p>

        <p className="mx-20 mt-8 ">
          The Committee shall be composed of the official representatives of the
          following:
        </p>
        <ul className="list-decimal mx-32 my-4">
          <li>The Department of Interior and Local Government (DILG);</li>
          <li>Department of Education, Culture and Sports (DECS)</li>
          <li>
            Bureau of Animal Industry (BAI) of the Department of Agriculture
            (DA)
          </li>
          <li>
            Protected Areas and Wildlife Bureau (PAWB) of the Department of
            Environment and Natural Resources (DENR)
          </li>
          <li>National Meat Inspection Commission (NMIC) of the DA</li>
          <li>Agriculture Training Institute (ATI) of DA</li>
          <li>Philippine Veterinary Medical Association</li>
          <li>
            Veterinary Practitioners Association of the Philippines (VPAP)
          </li>
          <li>Philippine Animal Hospital Association (PA HA)</li>
          <li>Philippine Animal Welfare Society (PAWS)</li>
          <li>
            Philippine Society for the Prevention of Cruelty to Animals (PSPCA)
          </li>
          <li>Philippine Society of Swine Practitioners (PSSP)</li>
          <li>Philippine College of Canine Practitioners (PCCP)</li>
          <li>Philippine Society of Animal Science (PSAS)</li>
        </ul>

        <p className="mx-20 my-6">
          The Committee shall be chaired by a representative coming from the
          private sector and shall have two (2) vice-chairpersons composed of
          the representative of BAI and another from the private sector.
        </p>
        <p className="mx-20 my-6">
          The Committee shall meet quarterly or as often as the need arises. The
          Committee members shall not receive any compensation but may receive
          reasonable honoraria from time to time.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SECTION 6.</span> It shall be
          unlawful for any person to torture any animal, to neglect to provide
          adequate care, sustenance or shelter, or maltreat any animals or to
          subject any dog or horse to dogfights or horse fights, kill or cause
          or procure to be tortured or deprived of adequate care sustenance or
          shelter, or maltreat or use the same in research or experiments not
          expressly authorized by the Committee on Animal welfare.
        </p>

        <p className="mx-20 my-6">
          The killing of any animal other than cattle, pigs, goats, sheep,
          poultry, rabbits, carabao, horse, deer and crocodiles is likewise
          hereby declared unlawful except in the following instances:
        </p>
        <ul className="list-decimal mx-32 my-4">
          <li>
            When it is done as part of the religious rituals of an established
            religion or sect or ritual required by ethnic custom of indigenous
            cultural communities: however, leaders shall keep records in
            cooperation with the Committee on Animal Welfare;
          </li>
          <li>
            When the pet animal is afflicted with an incurable communicable
            disease as determined and certified by a duly licensed
            veterinarians;
          </li>
          <li>
            When the killing is deemed necessary to put an end to the misery
            suffered by the animal as determined and certified by a duly
            licensed veterinarian
          </li>
          <li>
            When it is done to prevent an imminent danger to the life or limb of
            a human being; and
          </li>
          <li>When done for the purpose of animal population control;</li>
          <li>
            When animal is killed after it has been used in authorized research
            or experiments; and
          </li>
          <li>
            Any other ground analogous to the foregoing as determined and
            certified by a licensed veterinarian.
          </li>
        </ul>

        <p className="mx-20 my-6">
          In all the above mentioned cases, including those of cattle, pigs,
          goats, sheep, poultry, rabbits, carabao, hones, deer and crocodiles,
          the killing of the animals shall be done through humane procedures at
          all times.
        </p>
        <p className="mx-20 my-6">
          For this purpose, humane procedures shall means the use of the most
          scientific methods available as may be determined and approved by the
          Committee.
        </p>
        <p className="mx-20 my-6">
          Only those procedures approved by the Committee shall be used in
          killing of animals.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SECTION 7.</span> It shall be
          the duty of every person to protect the natural habitat of the
          wildlife. The destruction of said habitat shall be considered as a
          form of cruelty to animals and its preservation is a way of protecting
          the animals.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SECTION 8.</span> Any person
          who violate, any of the provisions of this Act shall, upon conviction
          by final judgment, be punished by imprisonment of not less than six
          (6) months nor more than two (2) years or a fine of not less than One
          thousand pesos (P1,000) nor more than Five thousand pesos (P5,000) or
          both at the discretion of the court. If the violation is committed by
          a juridical person, the officer responsible therefore shall serve the
          imprisonment when imposed. If violation is committed by an alien, he
          or she shall be immediately deported after serviced sentence without
          any further proceedings.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SECTION 9.</span> All laws,
          acts, decrees, executive orders, rules, and regulations inconsistent
          with the provisions of this Act are hereby repealed or modified
          accordingly.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SECTION 10.</span> This Act
          shall take effect fifteen (15) days after its publication in at least
          two (2) newspapers of general circulation.
        </p>

        <p className="mx-20 my-6 font-semibold">Approved:</p>
        <p className="mx-20 uppercase">JOSE DE VENECIA, JR.</p>
        <p className="mx-20 pb-6">Speaker of the House of Representatives</p>
        <p className="mx-20 uppercase">NEPTALI A. GONZALES</p>
        <p className="mx-20">President of the, Senate</p>

        <p className="mx-20 my-6">
          This Act, which is a consolidation of Senate Bill no. 2120 and House
          Sill No. 9274 was finally passed by the Senate and the House of
          Representatives on February 3, 1998 and February 2,1998, respectively.
        </p>

        <p className="mx-20 uppercase">ROBERTO P. NAZARENO</p>
        <p className="mx-20 pb-6">
          Secretary General, House of Representatives
        </p>
        <p className="mx-20 uppercase">HEZEL P. GACUTAN.</p>
        <p className="mx-20 pb-6">Secretary of the Senate</p>

        <p className="mx-20 my-6 font-semibold">Approved:</p>
        <p className="mx-20 my-6">February 11, 1998</p>

        <p className="mx-20 uppercase">FIDEL V. RAMOS</p>
        <p className="mx-20 pb-6">President of the Philippines</p>
        <p className="mx-20 my-6 italic">
          *THE PRECEDING ARTICLE WAS COPIED FROM THE ORIGINAL REPUBLIC ACT 8485
        </p>

        <h1 className="mx-20 my-8 text-3xl font-semibold text-center sm:text-center lg:text-left">
          Republic Act 10631
        </h1>
        <p className="mx-20 my-6">
          An Act amending certain sections of Republic Act No. 8485, otherwise
          known as “The Animal Welfare Act of 1998”.
        </p>

        <p className="mx-20">S. No. 3329</p>
        <p className="mx-20 pb-6">H. No. 6893</p>

        <p className="mx-20">Republic of the Philippines</p>
        <p className="mx-20">Congress of the Philippines</p>
        <p className="mx-20">Metro Manila</p>
        <p className="mx-20">Fifteenth Congress</p>
        <p className="mx-20 pb-6">Third Regular Session</p>

        <p className="mx-20 my-6">
          Begun and held in Metro Manila, on Monday, the twenty-third day of
          July, two thousand twelve.
        </p>

        <p className="mx-20 my-6">[REPUBLIC ACT NO. 10631]</p>

        <p className="mx-20 my-6">
          AN ACT AMENDING CERTAIN SECTIONS OF REPUBLIC ACT NO. 8485, OTHERWISE
          KNOWN AS “THE ANIMAL WELFARE ACT OF 1998″
        </p>

        <p className="mx-20 my-6">
          Be it enacted by the Senate and House of Representatives of the
          Philippines in Congress assembled:
        </p>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SECTION 1.</span> Section 1 of
          Republic Act No. 8485 is hereby amended to read as follows;
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SECTION 1.</span> It is the
          purpose of this Act to protect and promote the welfare of all
          terrestrial, aquatic and marine animals in the Philippines by
          supervising and regulating the establishment and operations of all
          facilities utilized for breeding, maintaining, keeping, treating or
          training of all animals either as objects of trade or as household
          pets. For purposes of this Act, pet animal shall include birds.
        </p>
        <p className="mx-20 my-6">
          “For purposes of this Act, animal welfare pertains to the physical and
          psychological well-being of animals. It includes, but not limited to,
          the avoidance of abuse, maltreatment, cruelty and exploitation of
          animals by humans by maintaining appropriate standards of
          accommodation, feeding and general care, the prevention and treatment
          of disease and the assurance of freedom from fear, distress,
          harassment, and unnecessary discomfort and pain, and allowing animals
          to express normal behavior.”
        </p>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 2.</span> Section 6 of
          Republic Act No. 8485 is hereby amended to read as follows:
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 6.</span> It shall be
          unlawful for any person to torture any animal, to neglect to provide
          adequate care, sustenance of shelter, or maltreat any animal or to
          subject any dog or horse to dogfights or horse fights, kill or cause
          or procure to be tortured or deprived of adequate care, sustenance or
          shelter, or maltreat or use the same in research or experiments not
          expressly authorized by the Committee on Animal Welfare.
        </p>

        <p className="mx-20 my-6">
          “The killing of any animal other than cattle, pigs, goats, sheep,
          poultry, rabbits, carabaos and horses is likewise hereby declared
          unlawful except in the following instances:
        </p>
        <p className="mx-20 my-6">“x x x.”</p>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 3.</span> A new Section 7
          is hereby inserted after Section 6 of the same Act to read as follows:
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 7.</span> It shall be
          unlawful for any person who has custody of an animal to abandon the
          animal.
        </p>

        <p className="mx-20 my-6">
          “If any person being the owner or having charge or control of any
          animal shall without reasonable cause or excuse abandon it, whether
          permanently or not, without providing for the care of that animal,
          such act shall constitute maltreatment under Section 9.
        </p>
        <p className="mx-20 my-6">
          “If the animal is left in circumstances likely to cause the animal any
          unnecessary suffering, or if this abandonment results in the death of
          the animal, the person liable shall suffer the maximum penalty.
        </p>
        <p className="mx-20 my-6">
          “Abandonment means the relinquishment of all right, title, claim, or
          possession of the animal with the intention of not reclaiming it or
          resuming its ownership or possession.”
        </p>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 4.</span> Section 8 of
          Republic Act No. 8485 which shall now become Section 9 is hereby
          amended to read as follows:
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 9.</span> Any person who
          subjects any animal to cruelty, maltreatment or neglect shall, upon
          conviction by final judgment, be punished by imprisonment and/ or
          fine, as indicated in the following graduated scale:
        </p>

        <p className="mx-20 my-6">
          “(1) Imprisonment of one (1) year and six (6) months and one (1) day
          to two (2) years and/or a fine not exceeding One hundred thousand
          pesos (P100,000.00) if the animal subjected to cruelty, maltreatment
          or neglect dies;
        </p>
        <p className="mx-20 my-6">
          “(2) Imprisonment of one (1) year and one (1) day to one (1) year and
          six (6) months and/or a fine not exceeding Fifty thousand pesos
          (P50,000.00) if the animal subjected to cruelty, maltreatment or
          neglect survives but is severely injured with loss of its natural
          faculty to survive on its own and needing human intervention to
          sustain its life; and
        </p>
        <p className="mx-20 my-6">
          “(3) Imprisonment of six (6) months to one (1) year and/or a fine not
          exceeding Thirty thousand pesos (P30,000.00) for subjecting any animal
          to cruelty, maltreatment or neglect but without causing its death or
          incapacitating it to survive on its own.
        </p>
        <p className="mx-20 my-6">
          “If the violation is committed by a juridical person, the officer
          responsible thereof shall serve the imprisonment. If the violation is
          committed by an alien, he or she shall be immediately deported after
          the service of sentence without any further proceeding.
        </p>
        <p className="mx-20 my-6">
          “The foregoing penalties shall also apply for any other violation of
          this Act, depending upon the effect or result of the act or omission
          as defined in the immediately preceding sections.
        </p>
        <p className="mx-20 my-6">
          “However, regardless of the resulting condition to the animal/s, the
          penalty of two (2) years and one (1) day to three (3) years and/or a
          fine not exceeding Two hundred fifty thousand pesos (P250,000.00)
          shall be imposed if the offense is committed by any of the following:
          (1) a syndicate; (2) an offender who makes business out of cruelty to
          an animal; (3) a public officer or employee; or (4) where at least
          three (3) animals are involved.
        </p>
        <p className="mx-20 my-6">
          “In any of the foregoing situations, the offender shall suffer
          subsidiary imprisonment in case of insolvency and the inability to pay
          the fine.”
        </p>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 5.</span> A new Section
          10 is hereby inserted after the Section above to read as follows:
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 10.</span>The Secretary
          of the Department of Agriculture shall deputize animal welfare
          enforcement officers from nongovernment organizations, citizens
          groups, community organizations and other volunteers who have
          undergone the necessary training for this purpose. The Philippine
          National Police, the National Bureau of Investigation and other law
          enforcement agencies shall designate animal welfare enforcement
          officers. As such, animal welfare enforcement officers shall have the
          authority to seize and rescue illegally traded and maltreated animals
          and to arrest violators of this Act subject to the guidelines of
          existing laws and rules and regulations on arrest and detention.
        </p>

        <p className="mx-20 my-6">
          “The Secretary of the Department of Agriculture shall, upon the
          recommendation of the Committee on Animal Welfare:
        </p>
        <p className="mx-20 my-6">
          “(1) Promulgate the guidelines on the criteria and training
          requirements for the deputization of animal welfare enforcement
          officers; and
        </p>
        <p className="mx-20 my-6">
          “(2) Establish a mechanism for the supervision, monitoring and
          reporting of these enforcement officers.”
        </p>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 6.</span> If, for any
          reason, any provision of this Act is declared to be unconstitutional
          or invalid, the other sections or provisions hereof which are not
          affected shall continue to be in full force and effect.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 7.</span> All laws,
          decrees, orders, rules and regulations and other issuances or parts
          thereof which are inconsistent with the provisions of this Act are
          hereby deemed repealed, amended or modified accordingly.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 8.</span> This Act shall
          take effect after fifteen (15) days from its publication in the
          Official Gazette or in at least two (2) newspapers of general
          circulation, whichever comes earlier.
        </p>

        <p className="mx-20 my-6 font-semibold">Approved,</p>

        <p className="mx-20">(Sgd.) FELICIANO BELMONTE JR.</p>
        <p className="mx-20 pb-6">Speaker of the House of Representatives</p>

        <p className="mx-20">(Sgd.) JINGGOY EJERCITO ESTRADA</p>
        <p className="mx-20">Acting Senate President</p>

        <p className="mx-20 my-6">
          This Act which is a consolidation of Senate Bill No. 3329 and House
          Bill No. 6893 was finally passed by the Senate and the House of
          Representatives on June 6, 2013.
        </p>

        <p className="mx-20">(Sgd.) MARILYN B. BARUA-YAP</p>
        <p className="mx-20">Secretary General</p>
        <p className="mx-20">House of Representatives</p>

        <p className="mx-20">(Sgd.) EMMA LIRIO-REYES</p>
        <p className="mx-20">Secretary of the Senate</p>

        <p className="mx-20 my-6">Approved: OCT 03 2013</p>

        <p className="mx-20">(Sgd.) BENIGNO S. AQUINO III</p>
        <p className="mx-20">President of the Philippines</p>

        <h1 className="mx-20 my-8 text-3xl font-semibold text-center sm:text-center lg:text-left">
          Republic Act 9482
        </h1>
        <p className="mx-20 my-6">
          An Act providing for the control and elimination of human and animal
          rabies, prescribing penalties for violation thereof and appropriating
          funds
        </p>
        <p className="mx-20 my-6">
          Republic Act No. 9482, “Anti-Rabies Act of 2007”
        </p>

        <p className="mx-20 my-6">
          AN ACT PROVIDING FOR THE CONTROL AND ELIMINATION OF HUMAN AND ANIMAL
          RABIES, PRESCRIBING PENALTIES FOR VIOLATION THEREOF AND APPROPRIATING
          FUNDS THEREFOR.
        </p>
        <p className="mx-20 my-6">
          Begun and held in Metro Manila, on Monday, the Nineteenth day of
          February, Two Thousand Seven.
        </p>
        <p className="mx-20 my-6">
          Be it enacted by the Senate and the House of Representatives of the
          Philippines in Congress assembled:
        </p>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SECTION 1.</span> Title. –
          This Act shall be known as the “Anti-Rabies Act of 2007”.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC 2.</span> Declaration of
          Policy. – It is the declared policy of the State to protect and
          promote the right to health of the people. Towards this end, a system
          for the control, prevention of the spread, and eventual eradication of
          human and animal Rabies shall be provided and the need for responsible
          pet ownership established.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC 3.</span> Definition of
          Terms. – For the purpose of this Act, the following terms shall mean:
        </p>

        <p className="mx-20 pb-1">
          (a) Bitten refers to an act by which a Dog seizes, cuts or grips with
          its teeth so that the skin of a person has been wounded, pierced or
          scratched.
        </p>
        <p className="mx-20 pb-1">
          (b) Concerned Officials refers to barangay officials, health workers,
          police officers or government veterinarians.
        </p>
        <p className="mx-20 pb-1">
          (c) Direct Supervision refers to range supervision where physical
          presence of the veterinarian within the barangay is necessary.
        </p>
        <p className="mx-20 pb-1">
          (d) Dog refers to a common quadruped domestic animal belonging to the
          order carnivora (male or female), scientifically known as canis
          familiaris.
        </p>
        <p className="mx-20 pb-1">
          (e) Euthanasia refers to the process of painless death to Dogs and
          other animals.
        </p>
        <p className="mx-20 pb-1">
          (f) Impound refers to seize and hold in the custody of the law.
        </p>
        <p className="mx-20 pb-1">
          (g) Owner refers to any person keeping, harboring or having charge,
          care or control of a Dog including his/her representative.
        </p>
        <p className="mx-20 pb-1">
          (h) Pound refers to a public enclosure for stray animals.
        </p>
        <p className="mx-20 pb-1">
          (i) Public Place refers to any place open to the public like parks,
          malls, markets, streets, etc.
        </p>
        <p className="mx-20 pb-1">
          (j) Rabies refers to a highly fatal disease caused by a lyssa virus,
          transmitted mainly through the bite of an infected animal and is
          characterized by muscle paralysis, hydrophobia and aerophobia, and
          other neurological manifestations.
        </p>
        <p className="mx-20 pb-1">
          (k) Rabies transmission refers to the transmission or passage of the
          Rabies virus through a bite by an infected animal, or through
          contamination with virus-laden saliva on breaks in the skin and of
          mucous membranes such as the eyes, the lips, the mouth, or the genital
          organs.
        </p>
        <p className="mx-20 pb-1">
          (l) Rabies Vaccination/Immunoprophylaxis of Humans refers to the
          inoculation of humans, with modern day rabies vaccines or Rabies
          immunoglobulin, by a trained doctor or nurse under the supervision of
          a qualified medical practitioner.
        </p>
        <p className="mx-20 pb-1">
          (m) Rabies Vaccination of Dogs refers to the inoculation of a Dog with
          a Rabies vaccine by a licensed government or privateveterinarian or
          trained individual under the direct supervision of a licensed
          veterinarian. The services of the said trainedindividual shall be
          limited only to Rabies Vaccination Injection in Dogs and only during
          government mass vaccination campaigns.
        </p>
        <p className="mx-20 pb-1">
          (n) Post-exposure Treatment (P.E.T) refers to an anti-Rabies treatment
          administered after an exposure to Rabies, which include local wound
          care, Rabies vaccine, with or without anti-Rabies immunizing agent.
        </p>
        <p className="mx-20 pb-1">
          (o) Pre-exposure Prophylaxis (P.E.P.) refers to Rabies vaccination
          administered before an exposure to Rabies to those who are at high
          risk of getting Rabies.
        </p>
        <p className="mx-20 pb-1">
          (p) Stray Dog refers to any Dog leaving its Owner’s place or premise
          and no longer under the effective control of the Owner.
        </p>
        <p className="mx-20 pb-1">
          (q) Veterinary or Human Barbiturates refer to drugs that depress the
          function of the central nervous system.
        </p>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 4.</span> National Rabies
          Prevention and Control Program. – It is hereby mandated that there
          shall be a National Rabies Prevention and Control Program to be
          implemented by a multi-agency/multi-sectoral committee chaired by the
          Bureau of Animal Industry of the Department of Agriculture. The
          program shall be a multi-agency effort in controlling and eliminating
          Rabies in the country. Among its component activities include:
        </p>

        <ul className="list-decimal mx-32 my-4">
          <li>Mass vaccination of Dogs;</li>
          <li>
            Establishment of a central database system for registered and
            vaccinated Dogs;
          </li>
          <li>
            Impounding, field control and disposition of unregistered, Stray and
            unvaccinated Dogs;
          </li>
          <li>
            Conduct of information and education campaign on the prevention and
            control of Rabies;
          </li>
          <li>
            Provision on pre-exposure treatment to high risk personnel and Post
            Exposure Treatment to animal bite victims;
          </li>
          <li>
            Provision of free routine immunization or Pre-Exposure Prophylaxis
            (P.E.P.) of schoolchildren aged five to fourteen in areas where
            there is high incidence of rabies as well as the encouragement of
            the practice of responsible pet ownership;
          </li>
          <li>
            The program shall be implemented by the Department of Agriculture
            (DA), Department of Health (DOH), Department of the Interior and
            Local Government (DILG) and Department of Education (DepEd), as well
            as Local Government Units (LGUs) with the assistance of the
            Department of Environment and Natural Resources (DENR),
            Non-Governmental Organizations (NGOs) and People’s Organizations
            (POs).
          </li>
        </ul>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 5.</span>{" "}
          Responsibilities of Pet Owner. – All Pet Owners shall be required to:
        </p>
        <p className="mx-20 pb-1">
          (a) Have their Dog regularly vaccinated against Rabies and maintain a
          registration card which shall contain all vaccinations conducted on
          their Dog, for accurate record purposes.
        </p>
        <p className="mx-20 pb-1">
          (b) Submit their Dogs for mandatory registration.
        </p>
        <p className="mx-20 pb-1">
          (c) Maintain control over their Dog and not allow it to roam the
          streets or any Public Place without a leash.
        </p>
        <p className="mx-20 pb-1">
          (d) Be a responsible Owner by providing their Dog with proper
          grooming, adequate food and clean shelter.
        </p>
        <p className="mx-20 pb-1">
          (e) Within twenty-four (24) hours, report immediately any Dog biting
          incident to the Concerned Officials for investigation or for any
          appropriate action and place such Dog under observation by a
          government or private veterinarian.
        </p>
        <p className="mx-20 pb-1">
          (f) Assist the Dog bite victim immediately and shoulder the medical
          expenses incurred and other incidental expenses relative to the
          victim’s injuries.
        </p>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 6.</span>{" "}
          Responsibilities of Government Agencies. – The following government
          agencies, which shall jointly implement the National Rabies Prevention
          and Control Program, shall be tasked to:
        </p>

        <p className="mx-20 my-6">A. Department of Agriculture</p>
        <ul className="list-decimal mx-32 my-4">
          <li>
            Improve and upgrade existing animal Rabies laboratory diagnostic
            capabilities to ensure better services to the people.
          </li>
          <li>
            Ensure the availability and adequate supply of animal anti-Rabies
            vaccine at all times.
          </li>
          <li>
            Undertake free anti-Rabies Vaccination of Dogs giving priority to
            high risk depressed areas.
          </li>
          <li>Maintain and improve animal Rabies surveillance system.</li>
          <li>
            Establish and maintain Rabies free zone in coordination with the
            LGUs.
          </li>
          <li>
            Immediately facilitate for the approval of the sale and use of
            Veterinary and Human Barbiturate drugs and veterinary euthanasia
            drugs by the DOH and the Philippine Drug Enforcement Agency (PDEA).
          </li>
          <li>
            Strengthen the training of field personnel and the Information
            Education and Communication (IEC) activities on Rabies prevention
            and control and responsible pet ownership.
          </li>
          <li>
            Conduct research on Rabies and its control in coordination with
            other agencies.
          </li>
          <li>
            Formulate minimum standards and monitor the effective implementation
            of this Act.
          </li>
          <li>
            Encourage collaborative activities with the DOH, DepEd, DILG, DENR,
            NGOs, POs and other concerned sectors.
          </li>
        </ul>

        <p className="mx-20 my-6">B. Department of Health</p>
        <ul className="list-decimal mx-32 my-4">
          <li>
            Ensure the availability and adequate supply of DOH pre-qualified
            human AntiRabies vaccine in animal bite treatment centers at all
            times and shall coordinate with other implementing agencies and
            concerned NGOs for this purpose.
          </li>
          <li>
            Provide Post-Exposure Treatment at the minimum expense to
            individuals bitten by animals suspected of being rabid which will
            consist of the initial vaccine and immunoglobulin dose.
          </li>
          <li>
            Provide Pre-Exposure Treatment to high-risk personnel, such as, but
            not limited to, laboratory staff, veterinarians, animal handlers,
            vaccinators and other persons working with Rabies virus for free.
          </li>
          <li>
            Coordinate with the DA in the development of appropriate health
            education strategy to inform the public on Rabies prevention and
            control and responsible pet ownership.
          </li>
          <li>Develop and maintain a human Rabies surveillance system.</li>
          <li>
            Encourage collaborative activities with the DA, DepEd, DILG, DENR,
            NGOs, POs and other concerned sectors.
          </li>
          <li>
            {" "}
            Immediately approve the registration of Veterinary and Human
            Barbiturate drugs and veterinary euthanasia drugs in coordination
            with the PDEA.
          </li>
        </ul>

        <p className="mx-20 my-6">C. Department of Education</p>
        <ul className="list-decimal mx-32 my-4">
          <li>
            Strengthen Rabies education program through school health
            teaching/curriculum.
          </li>
          <li>
            Assist in the Dog mass immunization campaigns in the community.
          </li>
          <li>
            Encourage collaborative activities with the DA, DOH, DILG, DENR,
            NGOs, POs and other concerned sectors.
          </li>
          <li>
            Integrate proper information and education on responsible pet
            ownership in the relevant subjects in the Elementary and High School
            levels.
          </li>
        </ul>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 7.</span>{" "}
          Responsibilities of the LGUs. – LGUs, in their respective localities,
          shall:
        </p>
        <ul className="list-decimal mx-32 my-4">
          <li>
            Ensure that all Dogs are properly immunized, registered and issued a
            corresponding Dog tag for every immunized and registered Dog.
          </li>
          <li>
            Strictly enforce Dog Impounding activities and field control to
            eliminate Stray Dogs.
          </li>
          <li>
            Ensure that Dogs are leashed or confined within the premises of the
            Owner’s house or Owner’s fenced surroundings.
          </li>
          <li>
            Allocate funds to augment the implementation of the National Rabies
            Prevention and Control Program, particularly on the financing of
            supplies and human and Dog vaccines needed for immunization.
          </li>
          <li>
            Ensure the enforcement of Section 6 of Republic Act No. 8485 or “The
            Animal Welfare Act of 1998”.
          </li>
          <li>
            Enact additional local ordinances that will support the National
            Rabies Prevention and Control Program that should include the
            regulation of treatment locally known as “tandok.”
          </li>
          <li>Prohibit the trade of Dogs for meat.</li>
          <li>
            With respect to cities and first class municipalities, establish and
            maintain a Dog Pound where Impounded Dogs shall be kept, in
            accordance with Section 9 herein: Provided, That the other
            municipalities, shall, on their own, establish a Dog Pound or opt to
            share the expense of establishing and maintaining a Dog Pound with
            other adjoining municipalities and/or with private animal shelters
            and control facilities.
          </li>
          <li>Prohibit the use of electrocution as a euthanasia procedure.</li>
          <li>
            Appoint a veterinarian and establish a veterinary office in every
            province, city and first-class municipality: Provided, That the
            other municipalities shall, on their own, opt to share the expense
            of having a veterinary office.
          </li>
          <li>
            Require pet shops to post information regarding Rabies and
            responsible pet ownership.
          </li>
          <li>
            For purposes of ensuring the administrative feasibility of
            implementing the provisions of this Act and subject to paragraph 8
            of this Section, the LGU shall collect the fines imposed under
            Section 11 subparagraphs (1). (3), (4), (5) and (6) hereof. Any and
            all fines collected pursuant to this Act shall be used for the
            enhancement of the National Rabies Prevention and Control Program
            within the locality concerned, as well as the achievement of the
            objectives envisioned in this Act.The DILG shall ensure compliance
            of these responsibilities by the LGUs.
          </li>
        </ul>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 8.</span> Assistance of
          NGOs and the Academe. – The agencies tasked to implement the
          anti-Rabies program shall seek the assistance and participation of
          NGOs in any of the following activities:
        </p>
        <ul className="list-decimal mx-32 my-4">
          <li>Community mobilization.</li>
          <li>
            Health education/information dissemination on Rabies and responsible
            pet ownership.
          </li>
          <li>Mass anti-Rabbies campaign</li>
          <li>
            Promotion of the anti-Rabies campaign during pet or any animal
            shows.
          </li>
          <li>Surveillance/reporting of Rabies cases in animals and humans.</li>
          <li>
            Any other activities geared towards the prevention and complete
            eradication of Rabies.
          </li>
        </ul>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 9.</span> Impounding
          Field Control and Disposition of Unregistered, Stray and Unvaccinated
          Dogs. – Unregistered, Stray or unvaccinated Dogs shall be put in Dog
          Pounds and disposed of, taking into consideration the following
          guidelines:
        </p>
        <ul className="list-decimal mx-32 my-4">
          <li>
            Unregistered, Stray or unvaccinated Dogs shall be impounded and kept
            in the LGU’s designated Dog Pound.
          </li>
          <li>
            Impounded Dogs not claimed after three days from the Dog Pound shall
            be placed for adoption to qualified persons, with the assistance of
            an animal welfare NGO, when feasible, or otherwise disposed of in
            any manner authorized, subject to the pertinent provisions of
            Republic Act No. 8485, otherwise known as the “Animal Welfare Act of
            1998”.
          </li>
          <li>
            A fee shall be paid by Owners of Impounded Dogs to the LGU
            concerned, pursuant to Section 7 hereof.
          </li>
        </ul>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 10.</span> Dog Population
          Control. – In furtherance of the policy of this Act to eradicate
          Rabies, there is the need to control the Dog population and minimize
          the number of unwanted Stray Dogs. As such, it is hereby mandated:
        </p>
        <ul className="list-decimal mx-32 my-4">
          <li>
            That the DA, DOH, DILG, DepEd, LGUs, with the assistance of NGOs and
            POs shall undertake an educational and promotional campaign on
            responsible Pet Ownership, including the option of spaying or
            neutering their Dogs.
          </li>
          <li>
            That the LGUs shall provide an incentive system whereby Owners of
            Dogs which have been spayed or neutered will be given a subsidized
            or discounted pet registration fee.
          </li>
          <li>
            That Dogs which have been impounded three times shall only be
            released after having been spayed or neutered, at the expense of the
            Pet’s Owner.
          </li>
        </ul>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 11.</span> Penalties. –
        </p>
        <ul className="list-decimal mx-32 my-4">
          <li>
            Pet Owners who fail or refuse to have their Dog registered and
            immunized against Rabies shall be punished by a fine of Two thousand
            pesos (P2,000.00).
          </li>
          <li>
            Pet Owners who refuse to have their Dog vaccinated against Rabies
            shall be liable to pay for the vaccination of both the Dog and the
            individuals Bitten by their Dog.
          </li>
          <li>
            Pet Owners who refuse to have their Dog put under observation after
            said Dog has Bitten an individual shall be meted a fine of Ten
            thousand pesos (P10,000.00).
          </li>
          <li>
            Pet Owners who refuse to have their Dog put under observation and do
            not shoulder the medical expenses of the person bitten by their Dog
            shall be meted a fine of Twenty-five thousand pesos (P25,000.00).
          </li>
          <li>
            Pet Owners who refuse to put leash on their Dogs when they are
            brought outside the house shall be meted a fine of Five hundred
            pesos (P500.00) for each incident.
          </li>
          <li>
            An impounded Dog shall be released to its Owner upon payment of a
            fine of not less than Five hundred pesos (P500.00) but not more than
            One thousand pesos (P1,000.00).
          </li>
          <li>
            Any person found guilty of trading Dog for meat shall be fined not
            less than Five thousand pesos,(P5,000.00) per Dog and subjected to
            imprisonment for one to four years.
          </li>
          <li>
            Any person found guilty of using electrocution as a method of
            euthanasia shall be fined not less than Five thousand pesos
            (P5,000.00) per act and subject to imprisonment for one to four
            years.
          </li>
          <li>
            If the violation is committed by an alien, he or she shall be
            immediately deported after service of sentence without any further
            proceedings.
          </li>
        </ul>

        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 12.</span> Implementing
          Rules and Regulations. – The DA, in coordination with the DOH, DILG,
          DepEd, DENR, NGOs and POs shall issue the necessary rules and
          regulations within sixty (60) days from the effectivity of this Act.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 13.</span>{" "}
          Appropriations. – The amount of One hundred million pesos
          (P100,000,000.00) necessary to implement the provisions of this Act
          shall be initially charged against the appropriations of the DOH, DA,
          DILG and DepEd under the General Appropriations Act. For the LGUs, the
          requirements shall be taken from their Internal Revenue Allotment and
          other local funds. Thereafter, such sums as may be necessary for its
          continued implementation shall be included in the annual General
          Appropriations Act.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 14.</span> Separability
          Clause. – In case any provision of this Act is declared
          unconstitutional, the other provisions shall remain in full force and
          effect.
        </p>
        <p className="mx-20 my-6">
          <span className="font-semibold text-xl">SEC. 15.</span> Effectivity. –
          This Act shall take effect fifteen (15) days after its publication in
          the Official Gazette or in at least two newspapers of general
          circulation, whichever comes earlier.
        </p>

        <p className="mx-20 my-6 font-semibold">Approved:</p>

        <p className="mx-20">(Sgd.) MANNY VILLAR</p>
        <p className="mx-20 pb-6">President of the Senate</p>

        <p className="mx-20">(Sgd.) JOSE DE VENECIA, JR.</p>
        <p className="mx-20">Speaker of the House of Representatives</p>

        <p className="mx-20 my-6">
          This Act which is a consolidation of Senate Bill No. 2541 and House
          Bill No. 4654 was finally passed by the Senate and the House of
          Representatives on February 7, 2007 and February 20, 2007
          respectively.
        </p>

        <p className="mx-20">(Sgd.) OSCAR G. YABES</p>
        <p className="mx-20">Secretary of the Senate</p>

        <p className="mx-20">(Sgd.) ROBERTO P. NAZARENO</p>
        <p className="mx-20">Secretary General</p>
        <p className="mx-20">House of Representatives</p>

        <p className="mx-20 my-6">Approved: May 25, 2007</p>

        <p className="mx-20">(Sgd.) GLORIA MACAPAGAL – ARROYO</p>
        <p className="mx-20">President of the Philippines</p>
      </div>
    </div>
  );
}

export default AnimalWelfareLaws;
