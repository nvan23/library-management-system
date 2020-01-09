-- Table: public."bookLocations"

-- DROP TABLE public."bookLocations";

CREATE TABLE public."bookLocations"
(
    id uuid NOT NULL,
    category character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone,
    "bookId" uuid,
    "createdById" uuid,
    "updatedById" uuid,
    CONSTRAINT "bookLocations_pkey" PRIMARY KEY (id),
    CONSTRAINT "bookLocations_bookId_fkey" FOREIGN KEY ("bookId")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID,
    CONSTRAINT "bookLocations_createdById_fkey" FOREIGN KEY ("createdById")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID,
    CONSTRAINT "bookLocations_updatedById_fkey" FOREIGN KEY ("updatedById")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public."bookLocations"
    OWNER to postgres;