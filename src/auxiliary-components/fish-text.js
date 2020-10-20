/**
 *
 *  Вспомогательный компонент-заполнитель для тестирования
 *
 */

import React from 'react'

export default ({num}) => {
    return Array.from({length: num}, (_, idx) => idx)
        .map(item => {
            return (
                <p key={item} data-testid={item}>
                    Goldeye mudminnow, glass catfish threadfin; giant gourami. Blue danio Reef triggerfish mahi-mahi
                    ground shark, bat ray peladillo, "New Zealand sand diver morid cod; New Zealand sand diver
                    thornyhead convict blenny." Desert pupfish clown loach zebra oto pumpkinseed Steve fish; zebra
                    trout--Ragfish waryfish; three-toothed puffer; white shark. Lampfish jewelfish bocaccio gopher
                    rockfish cavefish, goatfish. Armorhead catfish cepalin clown triggerfish Shingle Fish snoek sole
                    Sacramento splittail Billfish river shark coley manefish half-gill? Herring crappie--pike conger
                    warty angler; Mexican golden trout, Raccoon butterfly fish jewelfish. Stonefish spookfish cusk-eel
                    amago bobtail snipe eel ghost fish. Spadefish ling, pelican gulper; silverside pike characid Pacific
                    salmon baikal oilfish ribbonfish huchen searobin summer flounder. Mahseer glass knifefish,
                    barbelless catfish pelagic cod sabertooth shad tiger shovelnose catfish píntano mosshead warbonnet.
                    Atlantic eel plownose chimaera Quillfish vimba North American freshwater catfish sharksucker
                    tarwhine sablefish sea snail? Trumpeter butterfly ray bichir dogteeth tetra, sind danio; sabertooth
                    fish, sillago bat ray. Marine hatchetfish arowana catalufa gianttail longfin dragonfish dragonet
                    ronquil archerfish leaffish boga kappy, Mexican golden trout--alligatorfish slender barracudina.
                    Black swallower orangespine unicorn fish, galjoen fish opah sunfish. Gurnard broadband dogfish
                    butterfly ray climbing gourami sixgill ray sea raven firefish barreleye; whitetip reef shark.
                </p>
            )
        })
}