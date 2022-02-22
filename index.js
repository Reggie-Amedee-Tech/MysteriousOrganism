// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (num, arr) => {
    class PAF {
        constructor(specimenNum, dna) {
        this.dna = arr,
        this.specimenNum = num
        }
        mutate () {
            const random = arr[Math.floor(Math.random() * arr.length)]
            let newArr = []
            for (let i = 0; i < arr.length; i++) {
                if (random !== arr[i]) {
                    newArr.push(arr[i])
                    
                }
                this.dna = newArr
            }
            
            
        }
        compareDNA (pAequor) {
            let counter = 0;
            for (let i = 0; i < this.dna.length; i++) {
                for (let y = 0; y < pAequor.dna.length; y++) {
                    if (pAequor.dna[y] === this.dna[i]) {
                        counter += 1
                    }
                }
            }
            if (counter >= 0 && counter <= 2) {
                console.log('Both species have a 25% DNA match!')
            } else if (counter >= 2 && counter <= 4) {
                console.log('Both species have a 50% DNA Match!')
            }
        }
        willLikelySurvive () {
            let counter = 0;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === 'C' || this.dna[i] === 'D') {
                    counter += 1;
                }
                
            }
            
            counter === 3 ? true : false
            

            
        }
        
    }
    return object = new PAF(num,arr)
}

const daemon = pAequorFactory(15,['A', 'B', 'C', 'D'])

const angeal = pAequorFactory(20,['B', 'T', 'C', 'D'])

const humando = pAequorFactory(20, ['B', 'C', 'C', 'C', 'B', 'F'])

humando.willLikelySurvive()


