# Estimativa de Lurco APP

## Como contirbuir

1. Copie a banch development, não use a branch main

``` zsh
git clone --single-branch --branch development https://github.com/WallaceBarrosDev/estimativa-de-lucro.git
```

2. Entre na pasta do projeto
``` zsh
cd estimativa-de-lucro
```

3. Crie uma nova branch para alteração desejada seguindo o mdelo:
``` zsh
git checkout -b nome_da_branch-tipo-da-branch
```

4. Tipos de branch

- feature = nova funcionalidade
- fix = coreção de bugs

Exemplo:
``` zsh
git cehckout -b componet_botton-feature
```

5. Envie a nova branch quando tudo estiver pronto
``` zsh
git push -u origin componet_button-feature
```