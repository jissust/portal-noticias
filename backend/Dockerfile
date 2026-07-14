FROM node:20 AS base

WORKDIR /app

COPY package*.json ./

# ======================
# DESARROLLO
# ======================
FROM base AS development

RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm", "run", "develop"]

# ======================
# BUILD (para prod)
# ======================
FROM base AS build

ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

# Sacamos las devDependencies ya que no se necesitan para correr en producción
RUN npm prune --omit=dev

# ======================
# PRODUCCIÓN
# ======================
FROM node:20 AS production

WORKDIR /app

# Usuario sin privilegios para correr la app
#RUN groupadd -r strapi && useradd -r -g strapi strapi
RUN groupadd -r strapi \
 && useradd -r -g strapi -d /home/strapi strapi \
 && mkdir -p /home/strapi \
 && chown -R strapi:strapi /home/strapi

ENV HOME=/home/strapi

COPY --from=build --chown=strapi:strapi /app ./

ENV NODE_ENV=production

USER strapi

EXPOSE 1337

CMD ["npm", "run", "start"]