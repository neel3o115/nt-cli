# nt cli

a small command line toolkit for number theory.

built for people who like algorithms, math, and terminals.

---

## what is this

nt is a terminal tool that lets you run common number theory operations quickly.

instead of opening a calculator or writing code, you can just type a command.

example:

```

(nt) spf 21

spf table (n = 21)

number:   2   3   4   5   6   7   8   9  10  11
spf:      2   3   2   5   2   7   2   3   2  11

number:  12  13  14  15  16  17  18  19  20  21
spf:      2  13   2   3   2  17   2  19   2   3

(nt) factor 120

factor(120) = 2^3 * 3^1 * 5^1

120
 ├─ 2
 ├─ 2
 ├─ 2
 ├─ 3
 └─ 5

(nt) coprime 7 10

coprime(7,10) = true

(nt) phi 120

phi(120) = 32

(nt) primes 20

primes(20) = 2 3 5 7 11 13 17 19

```

---

## installation

clone the repository

```
git clone https://github.com/neel3o115/nt-cli
cd nt-cli
```

install dependencies

```
npm install
```

```
node version
```

```bash
nvm use 20
```

if node 20 is not installed


```bash
nvm install 20
nvm use 20
```

build the project

```
npm run build
```

link the cli globally

```
npm link
```

after this, the `nt` command should work from anywhere.

---

## quick check

run

```
nt doctor
```

if everything is working you should see something like

```
nt cli health check

✔ node detected
✔ commands loaded
✔ chalk ui working
✔ interactive mode ready

nt cli is ready
```

---

## interactive mode

run

```
nt
```

this starts a small interactive shell.

example session:

```
(nt) gcd 24 36

gcd(24,36) = 12

(nt) exit
```

---

## commands

```
gcd a b         compute the greatest common divisor

lcm a b         compute the least common multiple

isprime n       check if a number is prime

primes n        list primes up to n

factor n        prime factorization

phi n           euler's totient function

modpow a b m    compute a^b mod m

coprime a b     check if numbers are coprime

divisors n      list all divisors

numdiv n        number of divisors

sumdiv n        sum of divisors

ncr n r         binomial coefficient

modinv a m      modular inverse

spf n           smallest prime factor table

```
---

## example outputs

```
(nt) phi 36

phi(36) = 12

```

```
(nt) primes 20

primes(20) = 2 3 5 7 11 13 17 19
```

```
(nt) spf 20

number:  2   3   4   5   6   7   8   9  10
spf:     2   3   2   5   2   7   2   3   2
```

---

## why this exists

sometimes you just want to check a number theory result quickly.

this tool exists for that.
